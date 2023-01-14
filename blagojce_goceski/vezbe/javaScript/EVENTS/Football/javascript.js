// var klik = document.getElementsByTagName('body');

function onClick(event) {
    // get mouse coordinates
    let x = event.clientX;
    let y = event.clientY;
    console.log('mouse', x);
    console.log('mouse', y);

    // move Ronaldo
    var fudbaler = document.getElementById('messi');
    var pos = fudbaler.getBoundingClientRect();
    console.log('fudbaler', pos.top);
    console.log('fudbaler', pos.left);
    fudbaler.style.marginTop = y + "px";
    fudbaler.style.marginLeft = x + "px";
}

document.body.addEventListener("click", onClick);

function turnOffEvent() {
    document.body.removeEventListener("click", onClick);
}