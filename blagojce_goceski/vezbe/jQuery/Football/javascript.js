// FOOTBALL jQuery

$(document).ready(function () {
  $("body").on("click", function (event) {
    // get mouse coordinates
    var x = event.clientX;
    var y = event.clientY;
    console.log("mouse", x);
    console.log("mouse", y);

    // move Ronaldo
    var top = y - 50;
    var left = x - 50;
    // console.log(top);
    // console.log(left);
    console.log($("#messi"));

    // DA BI RADIO ANIMATE MORA DA BUDE POSITION ABSOLUTE NA TOM ELEMENTU
    $("#messi").animate(
      { top: top, left: left },
      100,
      console.log("dobar sut")
    );
  });

  $("button").on("click", function () {
    $("body").off("click");
  });
});

// document.body.addEventListener("click", onClick);

// function turnOffEvent() {
//   document.body.removeEv'entListener("click", onClick);
// }
