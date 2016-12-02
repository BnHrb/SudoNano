class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  $client = ApiAiRuby::Client.new(
    :client_access_token => 'b4356a5564ff459b856f1554ccf0da2f'
  )

  def ask_bot
    #reaction = BOT.get_reaction(params[:query])
   response = $client.text_request params[:query] 
   render json: { response: response }
  end
end
