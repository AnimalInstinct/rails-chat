export function scrollBottom() {
    if ($('#chatMessages').length > 0) {
        $('#chatMessages').scrollTop($('#chatMessages')[0].scrollHeight)
    }
}

function clearInput() {
    $('#chatInput').val('')
}

export function onFormSubmit() {
    $('#chatForm').on('submit', function (e) {
        $.when(e).then(() => clearInput())
    })
}

function getEventKey(event: JQuery.KeyDownEvent) {
    var code
    if (event.key !== undefined) {
        code = event.key
    } else if (event.keyCode !== undefined) {
        code = event.keyCode
    }
    return code
}


