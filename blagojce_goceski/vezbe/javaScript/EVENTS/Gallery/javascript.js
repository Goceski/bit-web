
document.getElementById("prva").addEventListener("click", changeBorder);
document.getElementById("druga").addEventListener("click", changeBorder);
document.getElementById("treca").addEventListener("click", changeBorder);
document.getElementById("cetvrta").addEventListener("click", changeBorder);
document.getElementById("peta").addEventListener("click", changeBorder);
document.getElementById("different").addEventListener("click", changeBorder);


function changeBorder(e) {
    var elementID = e.target.id; // Vraca ID kliknutog elementa
    if (elementID !== '') {
        // alert(elementID);   pokazuje ID elementa
        var pictures = document.getElementsByTagName('img');
        // console.log(pictures);
        // console.log(pictures[0]);
        // console.log(pictures[0].clientWidth);

        // Brise prethodni border od prethodni click
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].style.border="none"
        }


        var elem = document.getElementById(elementID);
        // console.log(elem.clientWidth);  // Width elementa
        if (elem.clientWidth == 300) {
            elem.style.border="solid 1px blue";
        } else {
            elem.style.border="solid 1px red";
        }
    }
}