import $ from 'jquery';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NavMenuComponent extends Vue {
    mounted() {
        var HandleClicks = function (event) {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var tar = $(event.target);
                var res = tar.parents(".navbar-collapse").length;
                if (res == 1) {
                } else {
                    $(".navbar-collapse.collapse").collapse('hide');
                }
            }
            return event;
        };

        window.addEventListener('click', HandleClicks);
        window.addEventListener('touchstart', HandleClicks);

        var i = 1;
        $(".nav-item").each(function () { $(this).css({ "animation-delay": i * 40 + "ms" }); i++; });

        $(".nav-item").click(function () {
            $(".nav-item").removeClass("active-submenu");
            $(this).addClass("active-submenu");
        });
        $(".sub").click(function () {
            $(".sub").removeClass("active-submenu-item");
            $(this).addClass("active-submenu-item");
        });
    }
}


