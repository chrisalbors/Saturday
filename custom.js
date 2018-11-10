//  //var .event-image= /Users/christinealbors/Desktop/CODETROTTERS/banner.jpeg
 
//  //"https://github.com/codetrotters/online-modules-intro-web/blob/master/module-6/exercises/01/banner.jpeg?raw=true"; esta es la direccion de la foto 'banner'

//  //var x = document.getElementById("myImg");

//  $(.event-image).fadein(function) {
     
    
//  }
$(document).ready(function() {
    $(".event-image").fadeIn();
    $(".buy").fadeIn();
})

$("#date, h3").mouseenter(function(){
    $(this).css("color", "#f1c40f");
});

$("#concert-title span").mouseenter(function(){
    $(this).css("color", "#f1c40f");
});

$("#date, h3").mouseleave(function(){
    $(this).css("color", "white");
});

$("#concert-title span").mouseleave(function(){
    $(this).css("color", "white");
});

function ticketSale () {
    let name = prompt("What is your name?");
    let email = prompt("What is your email?");
    let quantity= prompt("How many tickets do you want?");
if(name!==""||email!==""||quantity!=="") {
    $("#name").html(name);
    $("#email").html(email);
    $("#quantity").html(quantity);
    $(".buy h2").html("Congrats! Your order has been placed!")
}
}

$(".buy").click(ticketSale);

$(".daily-lineup").click(function() {
    let dataPictures= $(this).attr("data-pictures");
    $("." + dataPictures).slideDown();
});
$(".daily-lineup").dblclick(function() {
    let dataPictures= $(this).attr("data-pictures");
    $("." + dataPictures).slideUp();
});