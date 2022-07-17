class SimonsaysController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def simonsays
    @simonsaves = Simonsave.all
    @simonsave = Simonsave.new
  end

  def save
    @simonsave = Simonsave.new(simonsave_params)
    if @simonsave.save
      return render json: { savecode: params[:simonsave][:savecode]};
    else
      redirect_to root_path()
    end
  end

  def save
    @simonsave = Simonsave.new(simonsave_params)
    if @simonsave.save
      return render json: { savecode: params[:simonsave][:savecode]};
    else
      redirect_to root_path()
    end
  end

  def manualSave
    @simonsave = Simonsave.new(manualSave_params)
    if @simonsave.save
      redirect_to simonsays_path()
    else
      redirect_to root_path()
    end
  end

  def manualdelete
    @simonsave = Simonsave.find(params[:id])
    if @simonsave.destroy
      redirect_to simonsays_path()
    end
  end

  def delete
    @simonsave = Simonsave.find_by savecode: params[:savecode]
    if @simonsave.destroy
      return render json: { savestate: @simonsave[:savestate] }
    else
      return
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def simonsave_params
      params[:simonsave][:savecode] = generateRandomCode()
      params.require(:simonsave).permit(:savecode, :savestate)
    end

    def manualSave_params
      params.require(:simonsave).permit(:savecode, :savestate)
    end

    def generateRandomCode
      [*('a'..'z'),*('0'..'9')].shuffle[0,20].join
    end
end
