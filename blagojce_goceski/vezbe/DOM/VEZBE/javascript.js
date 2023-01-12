// Insert element
let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi there!</strong> You've read an important message."

// document.body.prepend(div);
document.body.append(div);

// Remove element
// setTimeout(() => div.remove(), 1000);

// Blinking element
setInterval(() => div.hidden = !div.hidden, 1500);


// Manipulate with existing element (ol)
ol.before('before'); // insert string "before" before <ol>
ol.after('after'); // insert string "after" after <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast);  // insert liLast at the end of <ol>


// Insert an HTML string “as html”
div1.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
// div1.insertAdjacentHTML('afterbegin', '<p>Hello</p>');
// div1.insertAdjacentHTML('beforeend', '<p>Bye</p>');
div1.insertAdjacentHTML('afterend', '<p>Bye</p>');
// elem.insertAdjacentText(where, text)
// elem.insertAdjacentElement(where, elem)