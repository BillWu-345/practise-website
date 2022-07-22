class HomeController < ApplicationController

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

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    redirect_to root_path()
  end

  # About page
  def about

  end

  private
    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:name, :comment)
    end
end
