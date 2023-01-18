
// SUPER
// Jedan nacin detekcije pritisnutog dugmeta
document.onkeydown = checkKey;
document.onkeyup = stop;


function checkKey(e) {
    var mario = document.getElementById("super-mario"); 

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        // alert('UP');
        mario.style.marginTop = "-25px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        // alert('DOWN');
        mario.style.height = "10vw";
        mario.style.width = "16vw";
        // mario.style.marginTop = "30vw";
    }
    else if (e.keyCode == '37') {
       // left arrow
       // alert('LEFT');
       mario.src = "./images/mario_running_left.gif";
       mario.style.width = "11vw";
       // mario.src = mario.src.replace(/\?.*$/,"")+"?x="+Math.random();
       // mario.src = "./images/mario_running_left.gif"+"?a="+Math.random();
       document.body.classList.add("body-animate-right");
       document.body.classList.remove("stopBg");
       document.body.classList.remove("body-animate-left");

    }
    else if (e.keyCode == '39') {
       // right arrow
       // alert('RIGHT');
       mario.src = "./images/mario_running.gif";
       mario.style.width = "11vw";
       mario.style.left = "45vw";
       // mario.src = mario.src.replace(/\?.*$/,"")+"?x="+Math.random();
       // mario.src = "./images/mario_running.gif"+"?a="+Math.random();
       document.body.classList.add("body-animate-left");
       document.body.classList.remove("stopBg");
       document.body.classList.remove("body-animate-right");
    }

}

function stop(e) {
    var mario = document.getElementById("super-mario"); 
    mario.src = "./images/mario.png"
    mario.style.marginTop = "1vw";
    mario.style.height = "15vw";
    mario.style.width = "15vw";
    mario.style.left = "42vw";
    document.body.classList.add("stopBg");
}


// Drugi nacin detekcije pritisnutog dugmeta
// node.addEventListener('keydown', function(event) {
//     const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

//     switch (event.key) {
//         case "ArrowLeft":
//             // Left pressed
//             break;
//         case "ArrowRight":
//             // Right pressed
//             break;
//         case "ArrowUp":
//             // Up pressed
//             break;
//         case "ArrowDown":
//             // Down pressed
//             break;
//     }

// });


