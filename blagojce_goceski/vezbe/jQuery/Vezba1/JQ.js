$("document").ready(function(){

function func1()
{
    // $("element-tag").action()                    jQuery
    // $("#element-id").action()                    jQuery
    // $(".class-name").action()                    jQuery
    // document.getElementByTagName(element name)   javascript

    $("#img1").fadeToggle(2500);    //2.5sec traje fading
}

function func2a()
{
    $("div").css('background-color', 'orange');
}

function func2b()
{
    $("div").css('background-color', 'blue');
}

function func2c()
{
    $("div").css('background-color', 'green');
}


});