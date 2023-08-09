$(document).ready(function () {
    


$(".card").hover(function () {
        // over
       $(this).find("img").addClass("agrandar");
    }, function () {
        // out
    $(this).find("img").removeClass("agrandar");
    }
);

});