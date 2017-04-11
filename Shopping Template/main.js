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
$('.hideOnClick1').fadeToggle();
$('.mobileForm').slideToggle(400);
});

$('.contact').show();

$('#mobileCart').click(function(){
$('.hideOnClick2').fadeToggle();

});
