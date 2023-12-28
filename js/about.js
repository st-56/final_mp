$(document).ready(function(){
    new WOW().init();
    let menu_click=false;
    $('.nav_icon').click(function(){
        menu_click=!menu_click;
        if(menu_click){
            $(".nav").slideDown('slow');
            $(".nav_icon").attr("menu_click","true");
        }
        else{
            $(".nav").slideUp('fast');
            $(".nav_icon").attr("menu_click","false");
        }
    });
})
