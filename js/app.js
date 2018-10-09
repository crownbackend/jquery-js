$(document).ready(function(){

    $("#target").append('lorem <br>');

    let texte = "recoucou";
    $("#target").append(texte + " ça va toi ?");

    function teste(args)
    {
        console.log('salut à tous ' + args);
    }

    teste('je suis moi');


    let tasks = [];
    function showTasks()
    {
        $("#result").empty();
        for(let i = 0; i < tasks.length; i++)
        {
            $("#result").append("<li class='select list-group-item' data-target='+ i +'>" + tasks[i] + "<button class='delete btn btn-danger'> x</button>" +
                "</li>");
        }

    }
    $("#btnClick").click(function(){

        let value = $("#filed").val();
        if(value.length > 0)
        {

            tasks.push(value);
            $("#error").slideUp('slow');
            $('#filed').val('');
            $("#result").append("<li class='select list-group-item'>" + value +
            "<button class='delete btn btn-danger'> x</button>" +
            "</li>");
            showTasks();
        }
        else
        {
           $("#error").slideDown('slow');
        }
    });


    $('#result').on('click', '.delete', function () {
        $(this).parent().remove();
        tasks.splice($(this).data('target'), 1)
        showTasks();
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




