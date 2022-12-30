// function addClass(){
//     var lista2 = document.getElementById('druga-lista');
//     lista2.classList.add('background');
// }
// addClass();


// function addClassToAll(){
//     var lista = document.querySelectorAll('li');
//     for (item in lista) {
//         lista[item].classList.add('background');
//     }
// }
// addClassToAll();


// function addClassThird(){
//     var lista3 = document.getElementById('treca-lista');
//     lista3.classList.add('background3');
// }
// addClassThird();


// -----------------------------------------------------------------

// function addClass(){
//     var lista = document.getElementsByClassName('active');
//     console.log(lista);
//     lista[0].remove('active');
// }
// addClass();

// function divUl() {
//     var element = document.querySelector('div').firstElementChild;
//     element.firstElementChild.classList.add('active');
// }
// divUl();

// -----------------------------------------------------------------


function alertMessage() {
    var element = document.getElementById('access').firstElementChild;
    console.log(element);
    alert(element.textContent);
}
alertMessage();

function replaceText(input) {
    var element2 = document.getElementById('access').lastElementChild;
    console.log(element2);
    element2.firstElementChild.textContent = input;
}
replaceText('YouTube');

// // -----------------------------------------------------------------


function newElements() {
    var element = document.createElement('div');
    element.innerHTML = '<p>Proba</p>';
    // element.textContent = 'Proba';
    document.body.appendChild(element);
}
newElements();


function newDropdown() {
    var element2 = document.createElement('select');
    element2.innerHTML = "<select> <option value='volvo'>Volvo</option>   <option value='saab'>Saab</option>   <option value='mercedes'>Mercedes</option>   <option value='audi'>Audi</option> </select>"; 

    document.body.appendChild(element2);

}
newDropdown();