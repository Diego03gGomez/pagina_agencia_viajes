$(document).ready(function () {
    


$(".card").hover(function () {
        // over
       $(this).find("img").addClass("agrandar");
    }, function () {
        // out
    $(this).find("img").removeClass("agrandar");
    }
);

$(".i_menu").click(function (e) { 
    e.preventDefault();  
$(".fondo_oculto").addClass("desplazar");
});

$(".cerrar").click(function (e) { 
    e.preventDefault();
    $(".fondo_oculto").removeClass("desplazar");
});










});