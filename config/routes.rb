EvoBooker::Application.routes.draw do
  devise_for :users

  root :to => 'home#extjs'
  
  # namespace :api do
  #   devise_for :users
  #   match 'authenticate_auth_token' => 'sessions#authenticate_auth_token', :as => :authenticate_auth_token
  #   match 'update_password' => "passwords#update" , :as => :update_password, :method => :put
  #   
  #   match 'search_role' => 'roles#search', :as => :search_role, :method => :get
  # end
end
