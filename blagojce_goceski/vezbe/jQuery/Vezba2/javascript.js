$(document).ready(function(){

    console.log('Hello World!');

    $('li:first').css({"border-bottom": "1px solid black"});
    $('li').css('text-transform', 'uppercase');
    $('li.active').css('color', 'red');
    $('li:nth-child(2)').css('background-color', 'blue');


    console.log($('ul'));


    $('ul').after('<div></div>');
    $('div').attr('id', 'gallery');

    $('#gallery').append('<img></img>');
    $('#gallery').append('<img></img>');
    $('#gallery').append('<img></img>');
    $('#gallery').append('<img></img>');
    $('#gallery').append('<img></img>');

    $('img:first').css({'background-color':'red', 'width':'250px', 'height':'250px'});
    $('img:nth-child(2)').css({'background-color':'green', 'width':'100px', 'height':'100px'});
    $('img:nth-child(3)').css({'background-color':'blue', 'width':'350px', 'height':'350px'});
    $('img:nth-child(4)').css({'background-color':'yellow', 'width':'250px', 'height':'250px'});
    $('img:last').css({'background-color':'orange', 'width':'150px', 'height':'150px'});

    $('#gallery').before('<h1>Amazing Gallery</h1>');

    $('img').each(function(index, element) {
        var ele = $(this).width()
        if(ele < 250){
            $(this).css('border', '3px solid green');
        }
    });


});