Rails.application.routes.draw do
  resources :rounds, only: [:create, :update, :index]
  resources :users, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
