class SimonsaysController < ApplicationController
  protect_from_forgery with: :null_session
  def simonsays
    @simonsaves = Simonsave.all
    @simonsave = Simonsave.new
  end

  def save
    @simonsave = Simonsave.new(simonsave_params)
    return render json: { gamestate: 1};
    if @simonsave.save
      redirect_to simonsays_path()
    else
      redirect_to root_path()
    end
  end

  def randomsave
    @simonsave = Simonsave.new(randomsave_params)
    if @simonsave.save
      redirect_to simonsays_path()
    end
  end

  def delete
    @simonsave = Simonsave.find(params[:id])
    @simonsave.destroy
    redirect_to simonsays_path()
  end

  private
    # Only allow a list of trusted parameters through.
    def simonsave_params
      params.require(:simonsave).permit(:savecode, :savestate)
    end

    def randomsave_params
      params = ActionController::Parameters.new(simonsave: { savecode: generateRandomCode(), savestate: generateRandomCode() })
      params.require(:simonsave).permit(:savecode, :savestate)
    end

    def generateRandomCode
      [*('a'..'z'),*('0'..'9')].shuffle[0,20].join
    end
end
