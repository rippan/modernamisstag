
var timeout;

function slutDownUp() {
    $("#slut").css("bottom","-650px;").show();
    $("#slut").addClass("slideInUp");
    timeout = setTimeout(function() {
        $("#slut").removeClass("slideInUp").addClass("rotateOutDownRight"); 
        timeout = setTimeout(function() {
            $("#slut").removeClass("rotateOutDownRight").hide();
        },800);
    },800);
}

// ON HIT, GNOME LOOKS
// HORDE IS GAY

//WOW INSULTS

// EXPLODE ANIMATION

// RAINING BLOOD

//KEK

// rotate 90 from side
function slutDeadAnimation1() {

}

$(document).ready(function() {
    var currenthits = 1;
    $("#slut").click(function() {
        
        if(currenthits<9) {
            currenthits++;
            console.log("TIMEOUT STOP");
            $("#slut").attr("src","img/slut/"+currenthits+".png");
            $("#slut").removeClass("slideInUp").addClass("rotateOutDownRight").fadeOut(); 
            clearTimeout(timeout);
        }
        /*
        else {
            currenthits = 1;
            $("#slut").removeClass("slideInUp").addClass("rotateOutDownRight").fadeOut(); 
            setTimeout(function() {
                $("#slut").removeClass("rotateOutDownRight");
            },800);
        }
        */
    });

});