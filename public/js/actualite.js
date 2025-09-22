$(document).ready(function() {
    $('.lastStory').on('click', function() {
        $('.lastStoryMenu').toggle()
    });

     $('.barMenux').off('click').on('click', function() {
        $('.barMenu').toggle(700);
        $('.barMenux').hide(700);
        $('.navMenu').hide(700);
    });


    $('.barMenu').off('click').on('click', function() {
        $('.barMenu').hide(450);
        $('.barMenux').show(550);
        $('.navMenu').show(550).css('position','absolute').css('z-index',' 9999').css('flex-direction','column').css('','').css('','').css('','').css('','');
    });
    
});