$(function() {
    $("#menu-btn").on("click", function(){
        $(this).toggleClass("active");
        $("menu").slideToggle();
    });

    $(".logLink").each(function(){
        $(this).on("click", function(){
            $(this).toggleClass("active");
            $("+.subLog", this).slideToggle();
            return false;
        });
    });
})