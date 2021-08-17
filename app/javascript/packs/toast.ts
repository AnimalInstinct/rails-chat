$(document).on("turbolinks:load", function () {
    $('.toast__close').on('click', function() {
        $(this).parent().hide()
    })
});
