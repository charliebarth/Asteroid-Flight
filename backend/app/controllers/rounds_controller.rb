class RoundsController < ApplicationController
  before_action :find_score, only: [:update]

    def create
        round = Round.create(round_params)
        render json: RoundSerializer.new(round).serializable_hash
    end

    def index
      score_array = []
      rounds = Round.all
      
      rounds.each do |round|
        if round.score != nil
          score_array << round.score
        end
      end

      top_scores = score_array.sort.reverse.take(10)
      render json: {score: "#{top_scores}"}
    end
  
    def update
      if @round
        if @round.update(round_params)
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
      @round = Round.find_by_id(params[:id])
    end
    
    def round_params
        params.require(:round).permit(:score, :user_id)
    end
end
