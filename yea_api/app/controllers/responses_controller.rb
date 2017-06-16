class ResponsesController < ApplicationController

  def index
    responses = response.all
    render :json => responses.to_json()
  end

  def create
    response = response.create( response_params )
    render json: response, status: :created
  end

  def show
    response = Response.find(params[:id])
    render :json => response.as_json()
  end


  def update
    response = Response.find(params[:id])

    if (response.update_attributes( response_params ))
      render :json => response
    else
      render :json => {status: :update_failed}
    end
  end

  def destroy
    response = Response.find(params[:id])

    if(response.destroy!)
      render :json => {status: :success}
    else
      render :json => {status: :delete_failed}
    end
  end

  private
  def response_params
    params.require(:response).permit([:user_id, :poll_id, :ratings, :visible, :body])
  end

end
