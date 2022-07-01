class HomeController < ApplicationController
  before_action :set_message, only: %i[ show edit update destroy ]

  def home
    @messages = Message.all
    @message = Message.new
  end

  def post
    @message = Message.new(message_params)

    if @message.save
      redirect_to root_path(@message), notice: "Comment was successfully created."
      # format.json { render :show, status: :created, location: @message }
    else
      format.html { render :new, status: :unprocessable_entity }
      format.json { render json: @message.errors, status: :unprocessable_entity }
    end
  end

# 	def create
#   	@message = Message.new(message_params)
#   	if @message.save
#     	redirect_to '/messages'
#   	else
#     	render 'new'
#   	end
# 	end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = MainMessage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:name, :comment)
    end
end
