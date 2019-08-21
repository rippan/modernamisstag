var animationTimer = 500;
var idle = 0;
var timeout;

function slutShow(time,bounce) {
    var animation = 1;
    //slower	3s
    //slow  	2s
    //fast	    800ms
    //faster	500ms
    
    if(bounce==1) {
        slideUpPixels = 130;
    }
    else if(bounce==2) {
        slideUpPixels = 200;
    }
    else if(bounce==3) {
        slideUpPixels = 350;
    }

    removeAnimationClass = "slideInUp slideOutDown";

    // random bottom up
    if(animation==1 && bounce>0) {
        $("#slut").show().offset({
            top:$(window).height()-slideUpPixels,
            left: Math.floor(Math.random() * ($(window).outerWidth() - $("#slut").width()))
        });

        $("#slut").addClass("slideInUp");
        timeout = setTimeout(function() {
            $("#slut").removeClass(removeAnimationClass).addClass("slideOutDown"); 
            timeout = setTimeout(function() {
                $("#slut").removeClass(removeAnimationClass).hide();
            },animationTimer);
        },animationTimer + time);
    }

    // random falling
    if(animation==2 && bounce>0) {
        $("#slut").show().offset({
            top:-500,
            left: Math.floor(Math.random() * ($(window).outerWidth() - $("#slut").width()))
        });

        $("#slut").addClass("slideInUp");
        timeout = setTimeout(function() {
            $("#slut").removeClass(removeAnimationClass).addClass("slideOutDown"); 
            timeout = setTimeout(function() {
                $("#slut").removeClass(removeAnimationClass).hide();
            },animationTimer);
        },animationTimer + time);
    }
}

function slutGame() {
    setTimeout(function() {
        slutShow();
    },2000);
}

$(document).ready(function() {

    var currenthits = 1;
    $("#slut").click(function() {

        if(currenthits<9) {
            currenthits++;
            $("#slut").attr("src","img/slut/"+currenthits+".png");
            clearTimeout(timeout);
            $("#slut").removeClass(removeAnimationClass).addClass("slideOutDown"); 
        }
        else {
            $("#slut").attr("src","img/slut/10.png");
        }

    });

});