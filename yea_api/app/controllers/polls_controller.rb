class PollsController < ApplicationController

    def index
      polls = poll.all
      render :json => polls.to_json()
    end

    def create
      poll = poll.create( poll_params )
      render json: poll, status: :created
    end

    def show
      poll = Poll.find(params[:id])
      render :json => poll.as_json()
    end


    def update
      poll = Poll.find(params[:id])

      if (poll.update_attributes( poll_params ))
        render :json => poll
      else
        render :json => {status: :update_failed}
      end
    end

    def destroy
      poll = Poll.find(params[:id])

      if(poll.destroy!)
        render :json => {status: :success}
      else
        render :json => {status: :delete_failed}
      end
    end

    private
    def poll_params
      params.require(:poll).permit([:user_id, :title, :details, :date_created, :open])
    end
end
