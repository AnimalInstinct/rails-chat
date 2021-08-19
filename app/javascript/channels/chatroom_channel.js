import consumer from "./consumer"
import { scrollBottom } from "../lib/chat"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#chatMessages').append(data.message)
    scrollBottom()
  }
})
