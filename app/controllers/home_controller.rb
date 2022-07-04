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

  # DELETE /sandwiches/1 or /sandwiches/1.json
  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    redirect_to root_path()
  end


  private
    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:name, :comment)
    end
end
