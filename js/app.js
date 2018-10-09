$(document).ready(function(){

    $("#target").append('lorem <br>');

    let texte = "recoucou";
    $("#target").append(texte + " ça va toi ?");

    function teste(args)
    {
        console.log('salut à tous ' + args);
    }

    teste('je suis moi');

    $("#btnClick").click(function(){
        let value = $("#filed").val();
        $('#filed').val('');
        $("#result").append("<li class='list-group-item'>" +
            "<button class='.delete btn btn-danger'>"+ value +"</button>" +
            "</li>");
    });

    $('#result').on('click', '.delete', function () {
        
    });


});




