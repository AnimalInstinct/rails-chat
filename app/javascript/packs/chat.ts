import { scrollBottom, onFormSubmit } from '../lib/chat'

$(document).on('turbolinks:load', function () {
    scrollBottom()
    onFormSubmit()
})
