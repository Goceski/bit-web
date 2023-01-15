// CHATROOM

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
    var inputText = document.getElementById('messageText');
    inputText.appendChild(newElem);
}

function sendMessage2() {
    var text2 = document.getElementById('inputText2');
    // alert(text.value);
    var newElem2 = document.createElement('p');
    var newElemText2 = document.createTextNode(text2.value);
    newElem2.classList.add("messageBackground2");
    newElem2.appendChild(newElemText2);
    var inputText2 = document.getElementById('messageText');
    inputText2.appendChild(newElem2);
}