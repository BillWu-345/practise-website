Rails.application.routes.draw do
  resources :sandwiches
  get 'simonsays' => 'simonsays#simonsays'
  root 'home#home'
  post 'post' => 'home#post'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
