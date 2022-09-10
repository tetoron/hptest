$(function() {
    $("#menu-btn").on("click", function(){
        if($("#menu-btn").hasClass("active")){
            $(this).removeClass("active");
            $("menu").slideUp();
        }else{
            $(this).toggleClass("active");
            $("menu").slideDown();
        }
    });

    $(".logLink").each(function(){
        $(this).on("click", function(){
            $(this).toggleClass("active");
            $("+.subLog", this).slideToggle();
            return false;
        });
    });
})