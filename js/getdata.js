// get data from text
$(document).ready(function(){
    $('#text').on('keyup',function(){
        let text = $('#text').val();
        $('.text-success').html(text);
    });

    //get data from select
    $('#select').click(function(){
        let select = $('#select').val();
        $('.text-danger').html(select);
    });

    //get data from textarea
    $('#description').on('keyup',function(){
        let des = $('#description').val();
        $('.text-warning').html(des);
    });

    //get data from radio
    $('.gender').on('click',function(){
        let gender = $('.gender:checked').val();
        $('.text-info').html(gender);
    });

    //get data from checkbox 
    $('.fruit').on('click',function(){
        let fruit = "";
        $('.fruit:checked').each(function(){
            fruit +=$(this).val() + "<br>";
        });
        let counter = $('[type = "checkbox"]:checked').length;
        $('.text-primary').html(fruit +""+ counter);
    })
});