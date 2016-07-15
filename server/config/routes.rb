Rails.application.routes.draw do
  resources :posts
  resources :inquiries, only: [:new, :create]
  match '*any' => 'application#options', :via => [:options]
end