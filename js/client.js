$(function () {
    // preload audio
    var toast = new Audio('toast.wav');

    $('.code').on('click', function (e) {
        e.preventDefault();
        toast.pause();
        toast.currentTime = 0;
        toast.play();
        $('#product').html($(this).data('product'));
        $('#code').html($(this).data('code'));
        $('#toast').toast({autohide: false}).toast('show');
        $('body').on('keyup', (function (event) {
            if (event.which == 27) {
                $('.toast').toast('dispose')
                $('body').off('keyup')
            }
        }))
    });


});