$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".desktopNav").css("display") == "none" ){
        $('.mobileNav').show();
    }
    if ($('.mobileNav').css('display') == 'none') {
      $('.desktopNav').show();
    }
}

$('#dropdownMenu1').on('click',function(){
$('.mobileForm').slideToggle(400);
});

$('#mobileCart').on('click',function(){

$('.mobileCart').slideToggle(400);

});

$('.contact').on('click',function(){
$('html, body').animate({
  scrollTop: $('#contact').offset().top
},2000);

});
