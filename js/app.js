$(document).ready(function(){

    $("#target").append('lorem <br>');

    $("#btnClick").on('click', function(){
        $("#btnClick").addClass("btn btn-danger");
    });

    let texte = "recoucou";
    $("#target").append(texte + " ça va toi ?");

    function teste(args)
    {
        console.log('salut à tous ' + args);
    }

    teste('je suis moi');

    $("#btnClick").click(function(){
        let value = $("#filed").val();
        console.log(value);
    });

});
