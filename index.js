$(function() {
    $("#menu-btn").on("click", function(){
        if($("#menu-btn").hasClass("active")){
            $(this).removeClass("active");
            $("menu").slideUp();
        }else{
            $(this).toggleClass("active");
            $(this).css("content", "-")
            $("menu").slideDown();
        }
    });

    $("#2022").on("click", function(){
        if($("#2022").hasClass("active")){
            $(this).removeClass("active");
            $('.subLog2022').slideUp();
        }else{
            $(this).toggleClass("active");
            $('.subLog2022').slideDown();
        }
    });

    $("#2021").on("click", function(){
        if($("#2021").hasClass("active")){
            $(this).removeClass("active");
            $('.subLog2021').slideUp();
        }else{
            $(this).toggleClass("active");
            $('.subLog2021').slideDown();
        }
    });
})