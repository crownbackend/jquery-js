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

        if(value.length > 0)
        {
            $("#error").slideUp('slow');
            $('#filed').val('');

            $("#result").append("<li class='select list-group-item'>" + value +
            "<button class='delete btn btn-danger'> x</button>" +
            "</li>");
        }
        else
        {
           $("#error").slideDown('slow');
        }
    });


    $('#result').on('click', '.delete', function () {
        $(this).parent().remove();
    });

    $("#btnRemove").on('click', function () {
        $(".select").remove();
    });
/*
    $("#result").on('mouseenter', '.select', function () {
        $(this).addClass("reslut2");
    });
    $("#result").on('mouseleave', '.select', function () {
        $(this).removeClass('result2');
    });*/







});




