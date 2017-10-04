import $ from 'jquery';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class HomeComponent extends Vue {
    mounted() {
        var i = 1;
        $(".grid-item").each(function () { $(this).css({ "animation-delay": i * 40 + "ms", "position": "relative" }); i++; });

        $(".nav-item").first().addClass("active-submenu");
    }
}
