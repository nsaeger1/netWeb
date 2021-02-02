attention = ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY',
    'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];
$(function () {
    $('#birthday').pickadate({format: 'mmmm, d'});
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
        $('.form-check-input').on('change', function () {
            // make the image visible
            // animate balloon in/out based on checkbox
            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('here animated bounceInDown') :
                $('#' + this.id + 'Img').addClass('gone animated bounceOutUp');
            setTimeout(function () {
                $('.gone').removeClass().addClass('ball');
            },800)
        });
    });

    $('#why').addClass(selected());
    $('#all').on('click', function () {
        $('.form-check-input').prop('checked', true);
        $('.ball').removeClass().addClass('here animated bounceInDown')
    });
    $('#none').on('click', function () {
        $('.form-check-input').prop('checked', false);
        $('.here').removeClass().addClass('gone animated bounceOutUp')
        setTimeout(function () {
            $('.gone').removeClass().addClass('ball');
        },800)

    });
    $('.form-check-label').hover(
        function () {
        var color = $(this).attr('for')
        $('#why').css('color',color)
    }, function () {
            $('#why').css('color','slategray')
        });

    $('#submit').on('click', function () {
        var what = $('.form-check-input:checkbox:checked').length > 0;
        if (!what) {
            $('#toast').toast({autohide: false}).toast('show');
            $('body').on('keyup', (function (event) {
                if (event.which == 27) {
                    $('.toast').toast('dispose');
                    $('body').off('keyup');
                }
            }))
        }

    });

});

function selected() {
    return attention[Math.floor(Math.random() * attention.length)]
}
function animateBalloons() {

}