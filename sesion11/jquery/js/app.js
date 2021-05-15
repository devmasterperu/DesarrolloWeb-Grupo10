// $(document).ready(function(){

// });

function onReady() {
    /*
        Jquery
    */
    console.log($('.titulo'))
    console.log($('#parrafo'))
    console.log($('[target*="_"]').length)

    //console.log($('.titulo').html());
    console.log($('.titulo').html('Texto enviado desde jQuery'));

    $('#parrafo').before('<p>He sido creado antes 😒</p>');
    $('#parrafo').after('<p>He sido creado despues 😀</p>');

    $('.caja').prepend('<p>He sido creado al inicio 😒</p>');
    $('.caja').append('<p>He sido creado al final 😀</p><p>He sido creado al final 😀</p>');

    console.log($('.caja').css('width'));
    console.log($('.caja').css(['width', 'background-color']));

    $('.caja').css('width', '200px');
    $('.caja').css(
        {
            'width':'200px',
            'border':'3px dashed red',
        }
    );

    $('#btn').on('click', function(){
        // $('.caja').css({
        //     'background-color':'peru'
        // })
        $('.caja').toggleClass('muestrate');
    })
}
$(document).ready(onReady);