

$(document).ready(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        onSelect: function (date, picker) {
            funcCall(date); 
        }
    });

    //on scroll make side bar sticky in order page
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        var windowTop = $(window).scrollTop();
        console.log(windowTop);
        if (windowTop > 423) {
            $('.fixed-side').addClass("fixed");
        } else {
            $('.fixed-side').removeClass("fixed");
        }
    });


});
//car animation
var arrSteps = Array.from($(".apply-content .step-number"));
let path = anime.path("#line-svg path");
anime({
    targets: "#car-svg",
    translateX: path("x"),
    translateY: path("y"),
    easing: "linear",
    rotate: path('angle'),
    duration: 20000,
    loop: true,
    update: function (anim) {
        if (anim.progress > 0 && anim.progress <= 30) {
            $(".apply-content .step-number").removeClass("active");
            $(arrSteps[0]).addClass("active");
        }
        else if (anim.progress > 30 && anim.progress <= 60) {
            $(".apply-content .step-number").removeClass("active");
            $(arrSteps[1]).addClass("active");
        }
        else if (anim.progress > 60 && anim.progress <= 88) {
            $(".apply-content .step-number").removeClass("active");
            $(arrSteps[2]).addClass("active");
        }
        else if (anim.progress > 88 && anim.progress <= 100) {
            $(".apply-content .step-number").removeClass("active");
        }
    }
});

function funcCall(date) {
    //alert('your function called with date= ' + date);
    console.log(date)
}
