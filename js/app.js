
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
        let result = $("#result").append(value + "<br>");

        $('#btnRemove').click(function () {
            
            result.remove();
        });

    });





