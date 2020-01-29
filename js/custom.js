$("body").keydown(function (eventData){
    switch (eventData.keyCode) {
        case 37:
            var positionX = $("#car").position();
            if(positionX.left>=10) {
                $("#car").css("left", positionX.left - 20 + "px");
            }
            break;

        case 39:
            var positionX2 = $("#car").position();
        if(positionX2.left<=195){
            $("#car").css("left",positionX2.left+20+"px");}
            break;

        default:return;
    }
});


var timeID=setInterval(function (eventData) {
    var position = $("#car2").position();
    if(position.top>=460){

        $("#car2").css("top", 0+ "px");
        $("#car2").css("left", getRndInteger(0,200)+"px");
    }
    else {
        $("#car2").css("top", position.top + 1 + "px");
        if(position.top==310){
            var mycar = $("#car").position();

            if(position.left+100>mycar.left&&position.left<mycar.left+100){
                clearInterval(timeID)
                $("#car2").css("top", 310+ "px");
                $("#gemeOver>h4").css("visibility","visible");

            }

        }
    }
},);

/*var timeID2=setInterval(function (eventData) {
    var position = $("#car3").position();
    if(position.top>=460){
        $("#car3").css("top", 0+ "px");
        $("#car3").css("left", getRndInteger(0,200)+"px");
    }
    else {
        $("#car3").css("top", position.top + 1 + "px");
        if(position.top==310){
            var mycar = $("#car").position();
            console.log(position.left)
            if(position.left+100>mycar.left&&position.left<mycar.left+100){
                clearInterval(timeID2)
                $("#car3").css("top", 310+ "px");
                $("#gemeOver>h4").css("visibility","visible");

            }

        }
    }
},getRndInteger(10,20));*/


/*

var timeID3=setInterval(function (eventData) {
    var position = $("#car4").position();
    if(position.top>=460){
        $("#car4").css("top", 0+ "px");
        $("#car4").css("left", getRndInteger(0,200)+"px");
    }
    else {
        $("#car4").css("top", position.top + 2 + "px");
        if(position.top==310){
            var mycar = $("#car").position();
            console.log(position.left)
            if(position.left+100>mycar.left&&position.left<mycar.left+100){
                clearInterval(timeID3)
                $("#car4").css("top", 310+ "px");
                $("#gemeOver>h4").css("visibility","visible");

            }

        }
    }
},rndInteger+10);

var timeID4=setInterval(function (eventData) {
    var position = $("#car5").position();
    if(position.top>=460){
        $("#car5").css("top", 0+ "px");
        $("#car5").css("left", getRndInteger(0,200)+"px");
    }
    else {
        $("#car5").css("top", position.top + 2 + "px");
        if(position.top==310){
            var mycar = $("#car").position();
            console.log(position.left)
            if(position.left+100>mycar.left&&position.left<mycar.left+100){
                clearInterval(timeID4)
                $("#car5").css("top", 310+ "px");
                $("#gemeOver>h4").css("visibility","visible");

            }

        }
    }
},rndInteger+15);*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
