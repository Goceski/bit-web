function toggleBackground() {
    var elem = document.body;
    elem.classList.toggle("newBackground");
}

function turnOff() {
    var element = document.getElementById("button1");
    element.classList.add("noToggle");
}

// Chat Room
function sendMessage() {
    var text = document.getElementById('inputText');
    // alert(text.value);
    var newElem = document.createElement('p');
    var newElemText = document.createTextNode(text.value);
    newElem.classList.add("messageBackground");
    newElem.appendChild(newElemText);
    var text2 = document.getElementById('messageText');
    text2.appendChild(newElem);
}