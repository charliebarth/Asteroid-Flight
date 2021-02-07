class RoundsController < ApplicationController
    def create
        round = Round.create(round_params)
        render json: RoundSerializer.new(round).serializable_hash
      end
  
      def index
        rounds = Round.all
        render json: RoundSerializer.new(rounds).serializable_hash
      end
    
      private
    
      def round_params
        params.require(:round).permit(:score, :user_id)
      end
end
