
$(document).ready(function(){

    $("#target").append('lorem <br>');

    let tasks;
    if(localStorage.getItem('tasks'))
    {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    else
    {
        tasks = [];
    }

    function showTasks()
    {
        $("#result").empty();
        for(let i = 0; i < tasks.length; i++)
        {
            $("#result").append("<li class='select list-group-item' data-target='+ i +'>"
                    + tasks[i] +
                    "<button class='delete btn btn-danger'> x</button>" +
                "</li>");
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
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
            console.log(tasks);
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

    $("button").click(function(){
    $.ajax({
        type: 'GET',
        url: 'https://api.punkapi.com/v2/beers/random',
        timeout: 3000,
        success: function(data){
            $('#zone').append(data);
            for(i = 0; i < data.length; i++)
            {
                let beer = data[i];
                $("#zone").append(beer.name + beer.id);
            }
        },
        error: function(){
            $('#zone').html('Cette requête AJAX n\'a pas abouti');
        }
    });

    });






});




