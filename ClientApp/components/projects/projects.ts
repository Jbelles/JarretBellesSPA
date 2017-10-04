import $ from 'jquery';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import 'owl.carousel';
Vue.config.devtools = true;

interface Picture {
    url: string;
    description: string,
}
interface Project {
    Description: string,
    Id: string,
    logo: string;
    Name: string,
    Pictures: Array<Picture>
    Videos: Array<Picture>
    Tasks: Array<string>
}

var check = { Description: "", Id: "", Name: "", Pictures: [], Tasks: [] };

@Component
export default class ProjectsComponent extends Vue {

    projects: Project[] = [];
    activeProject: Project = { Description: "", Id: "", logo: "", Name: "", Pictures: [], Videos: [], Tasks: [] };
    PageStart = true;
    activeCarousel = "";
    activeImage = "";
    activeVideoSrc = "";
    loading = true;
    mounted() {
        fetch('/api/Projects/Get')
            .then(response => response.json() as Promise<Project[]>)
            .then(data => {
                this.projects = data;

                this.loading = false;
            });

    }
    SetActiveProject(index) {
        this.activeImage = "";
        this.activeProject = this.projects[index];
        check = this.activeProject;

    }


    OnStartAnimation() {

        var i = 1;
        $(".hex").each(function () {
            var timing = i * 40 + "ms ";
            //set individual timing here if you want it
            var rand = Math.floor(Math.random() * 4) + 1;
            var animation = "";
            if (rand == 1) {
                animation = " in-from-bottom";
            }
            else if (rand == 2) {
                animation = " in-from-top";
            }
            else if (rand == 3) {
                animation = " in-from-left";
            }
            else if (rand == 4) {
                animation = " in-from-right";
            }
            $(this).css({
                "position": "relative", "top": "50px", "animation": ".5s cubic-bezier(.28,.62,.74,1.11) " /*+ timing + " " */+ animation, "animation-fill-mode": "forwards",
            });
            i++;
        });
            var y = 1;
            ////apply randomly to grid
            //$(".hexLink").each(function () {
            //    $(this).attr('id', 'hex-' + y++);
            //});
            //var leng = 5;
            //var list = [];
            //while (leng > 0) {
            //    var rand = Math.floor(Math.random() * 5) + 1;
            //    while (($.inArray(rand, list) >= 0)) {
            //        rand = Math.floor(Math.random() * 5) + 1;
            //    }
            //    list.push(rand);
            //    $("#hex-" + rand + "").css({
            //        "background-size": "cover", "background-image": "url(http://imgur.com/ru2y5UM.png)"
            //    });
            //    leng--;
            //}
    }
    Setup() {
        this.loading = false;
        $(".close").onclick = function () {
            $(".hex").removeClass("active-hex");
        }
        window.onkeyup = function (e) {
            var key = e.keyCode ? e.keyCode : e.which;

            if (key == 27) {
                $(".hex").removeClass("active-hex");
                if ($("#image-modal").hasClass("modal-active"))
                {
                    $("#image-modal").removeClass("modal-active");
                    $("#image-modal").addClass("modal-fade");
                }
                else if ($("#video-modal").hasClass("modal-active")) {
                    $("#video-modal").removeClass("modal-active");
                    $("#video-modal").addClass("modal-fade");
                }
                else {
                    $("#Modal").removeClass("modal-active");
                    $("#Modal").addClass("modal-fade");
                }
            }
        }
        // When the user clicks anywhere outside of the modal, close it

        var modal = document.getElementById('modal-content');

        var HandleClicks = function (event) {
            if ($(event.target).hasClass("zoom")) {
                $("#image-modal").removeClass("modal-active");
                $("#image-modal").addClass("modal-fade");
                $("#video-modal").removeClass("modal-active");
                $("#video-modal").addClass("modal-fade");
            }
            else if ($(".carousel-inner").has($(event.target)).length > 0 && $(event.target).hasClass("img-responsive"))
            {
              
            }
            else if ($('.modal-content').has($(event.target)).length > 0 || $(event.target).hasClass('modal-content')) {
                if ($(event.target).hasClass("image-content"))
                {
                //    $("#image-modal").removeClass("modal-active");
                //  $("#image-modal").addClass("modal-fade");
                }
                //if (window.matchMedia("(max-width: 767px)").matches) {
                //    $(".hex").removeClass("active-hex");
                //    $("#Modal").removeClass("modal-active");
                //    $("#Modal").addClass("modal-fade");
                //    $(".carousel").carousel(0);
                //}
            }
            else if ($(event.target).hasClass("hexLink") || $(event.target).hasClass("navbar-toggle") || $(".navbar-toggle").has($(event.target)).length > 0) {
                
            }
            else {

                if ($("#image-modal").hasClass("modal-active")) {
                    $("#image-modal").removeClass("modal-active");
                    $("#image-modal").addClass("modal-fade");
                }
                else if ($("#video-modal").hasClass("modal-active")) {
                    $("#video-modal").removeClass("modal-active");
                    $("#video-modal").addClass("modal-fade");
                }
                else {
                    $(".hex").removeClass("active-hex");
                    $("#Modal").removeClass("modal-active");
                    if ($("#Modal").hasClass('prime')) {
                        $("#Modal").removeClass("prime");
                    }
                    else {
                        if (check.Id == "") {

                        }
                        else {
                            $("#Modal").addClass("modal-fade");
                            $(".carousel").carousel(0);
                        }
                    }
                }


            }
            return event;
        };
        if (window.matchMedia("(max-width: 767px)").matches) {
            window.addEventListener('touchstart', HandleClicks);
        }
        else {
            window.addEventListener('click', HandleClicks);
        }

        $(".hexLink")
            .mouseenter(function () {
                $(this).parent().parent().addClass("hover");
                $(this).parent().parent().removeClass("hover-out");
                $(this).parent().parent().css({ "position": "relative", "top": "50px", "animation": "", "animation-fill-mode": "forwards" });
            })
            .mouseleave(function () {
                if ($(this).parent().parent().hasClass("active-hex")) {
                    $(this).parent().parent().removeClass("hover")
                    $(this).parent().parent().css({ "position": "relative", "top": "50px", "animation": ".5s in-from-bottom", "animation-fill-mode": "forwards" });
                }
                else {
                    $(this).parent().parent().removeClass("hover")
                    $(this).parent().parent().addClass("hover-out");
                }
            });


        $(".hex").click(function () {
            if ($(".modal-active")[0]) {
                $(".hex").removeClass("active-hex");
                if ($("#image-modal").hasClass("modal-active")) {
                    $("#image-modal").removeClass("modal-active");
                    $("#image-modal").addClass("modal-fade");
                }
                else if ($("#video-modal").hasClass("modal-active")) {
                    $("#video-modal").removeClass("modal-active");
                    $("#video-modal").addClass("modal-fade");
                }
                else {
                    $("#Modal").removeClass("modal-active");
                    $("#Modal").addClass("modal-fade");
                }
                $(".carousel").carousel(0);
            }
            else {
                $(".hex").removeClass("active-hex");
                $(this).addClass("active-hex");
                $("#Modal").removeClass("modal-fade");
                $("#Modal").addClass("modal-active");
            }
        })
    }

    updated() {
        if (this.PageStart) {
            this.OnStartAnimation();
            this.Setup();
            this.PageStart = false;
        }
        




            // When the user clicks on <span> (x), close the modal

    }
    IsActive() {
        this.activeCarousel = $(document.getElementsByClassName('item active')[0].firstElementChild).attr("src");
    }
    ImageModalActive(imageurl) {
        $("#image-modal").removeClass("modal-fade");
        $("#image-modal").addClass("modal-active");
        this.activeImage = imageurl;
    }
    ImageModalInactive() {
        $("#image-modal").addClass("modal-fade");
        $("#image-modal").removeClass("modal-active");
        this.activeImage = "";
        this.$forceUpdate();
    }
    VideoModalActive(videourl) {
        $("#video-modal").removeClass("modal-fade");
        $("#video-modal").addClass("modal-active");
        this.activeVideoSrc = videourl;
    }
    VideoModalInactive() {
        $("#video-modal").addClass("modal-fade");
        $("#video-modal").removeClass("modal-active");
        this.activeVideoSrc = "";
        this.$forceUpdate();
    }
}


