Rails.application.routes.draw do
  resources :posts
  match '*any' => 'application#options', :via => [:options]
end