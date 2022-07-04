class HomeController < ApplicationController
  before_action :set_message, only: %i[ show edit update destroy ]

  def home
    @messages = Message.all
    @message = Message.new
  end

  def post
    @message = Message.new(message_params)

    if @message.save
      redirect_to root_path()
    end
  end

  # DELETE /sandwiches/1 or /sandwiches/1.json
  def destroy
    @message.destroy
    redirect_to root_path()
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:name, :comment)
    end
end
