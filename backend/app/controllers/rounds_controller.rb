class RoundsController < ApplicationController
  before_action :find_score, only: [:show, :update]

    def create
        round = Round.create(round_params)
        render json: RoundSerializer.new(round).serializable_hash
    end
  
    # def index
    #     rounds = Round.all
    #     render json: RoundSerializer.new(rounds).serializable_hash
    # end


    def show
      if @round
        # options = {include: [:user]}
        render json: ScoreSerializer.new(@round)
      else
        render json: {error: "Sorry, there is no round with that ID", status: 400}, status: 400
      end
    end
  
    def update
      if @round
        if @round.update(rounds_params)
          render json: RoundSerializer.new(@round)
        else
          render json: {error: @round.errors.full_messages, status: 400}, status: 400
        end
      else
        render json: {error: "Sorry, there is no round with that ID", status: 400}, status: 400
      end
    end
  
  
    
    private

    def find_score
      @round = Score.find_by_id(params[:id])
    end
    
    def round_params
        params.require(:round).permit(:score, :user_id)
    end
end
