window.onload = function () {
    //table栏切换
    var footerTop = document.querySelector(".footerTop");
    var firstli = footerTop.querySelector("li:first-of-type");
    var lastli = footerTop.querySelector("li:last-of-type");
    var number1 = document.querySelector(".number1");
    var number2 = document.querySelector(".number2");
    var move1 = document.querySelector(".move1");
    var move2 = document.querySelector(".move2");
    var audio = document.querySelector("audio");
    var player = document.querySelector(".player");
    var back = document.querySelector(".back");
    move2.style.display = "none";
    lastli.onclick = function () {
        move1.style.display = "none";
        number1.style.display = "none";
        move2.style.display = "block";
        number2.style.display = "block";
    }
    firstli.onclick = function () {
        move1.style.display = "block";
        number1.style.display = "block";
        move2.style.display = "none";
        number2.style.display = "none";
    }
    //播放器 

    
    back.onclick = function () {
        audio.play();
        back.style.display = "none";
        player.style.display = "block";
       
       
        
    }
    player.onclick = function () {
        audio.pause();
        player.style.display = "none";
        back.style.display = "block";
        
    }

}