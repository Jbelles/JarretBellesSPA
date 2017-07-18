import $ from 'jquery';
import Vue from 'vue';

$(document).ready(function () {

    //$('.sub').click(function (e) {
    //    var mq = window.matchMedia('(max-width: 767px)');
    //    if (mq.matches) {
    //        $('.navbar-toggle').click();
    //    }
    //    else {
    //    }
    //}),
    //$('.nav-item').not(".subnav-parent").click(function (e) {
    //    var mq = window.matchMedia('(max-width: 767px)');
    //    if (mq.matches) {
    //        $('.navbar-toggle').click();
    //    }
    //    else {
    //    }
    //}),

    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active-submenu");
        $(this).addClass("active-submenu");
    });
    $(".sub").click(function () {
        $(".sub").removeClass("active-submenu-item");
        $(this).addClass("active-submenu-item");
    });
});

