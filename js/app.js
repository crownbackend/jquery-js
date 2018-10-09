$(document).ready(function(){

    $("#target").append('salut');

    $("#btnClick").on('click', function(){
        $("#btnClick").addClass("btn btn-danger");
    });

});