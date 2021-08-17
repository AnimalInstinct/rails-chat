class MessagesController < ApplicationController
  before_action :require_user

  def create
    # message = current_user.build(message_params)
    message = Message.create(body: message_params['body'])
    current_user.messages << message
    redirect_to root_path if message.save
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
