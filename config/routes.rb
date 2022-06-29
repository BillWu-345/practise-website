Rails.application.routes.draw do
  resources :comments
  get 'simonsays' => 'simonsays#simonsays'
  root 'home#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
