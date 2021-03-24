/*$(function () {
    $(".menu_mobile").click(function() {
        $(".dropdown_menu_container").toggleClass("active");
        $("body").toggleClass("lock");
        /!*return false;*!/
    });
});*/

$(document).ready(function () {
    $("#menu_toggle").click(function ()  {
        if ( $("body").hasClass("lock")) {
            $("body").removeClass("lock");
            $("#offcanvas").removeClass("active");
        } else {
            $("body").addClass("lock");
            $("#offcanvas").addClass("active");
        }
    });
});

/*$(document).ready(function () {     work
    $(".menu_mobile").mousedown(function ()  {
        if ( $("body").hasClass("lock")) {
            $("body").removeClass("lock");
        } else {
            $("body").addClass("lock");
        }
    });
});*/





