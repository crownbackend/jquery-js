$(document).ready(function(){

    $("#target").append('lorem <br>');

    $("#btnClick").on('click', function(){
        $("#btnClick").addClass("btn btn-danger");
    });


    let texte = "recoucou";
    $("#target").append(texte + " ça va toi ?");


});
