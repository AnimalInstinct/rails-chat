export const scroll_bottom = () => {
    if($('#chatMessages').length > 0){
        console.log('Scrolling down')
        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight);
    }
}

$(document).on("turbolinks:load", function () {
    scroll_bottom()
});
