Rails.application.routes.draw do
  # for copy+pasting
  resources :sandwiches

  # main page
  root 'home#home'
  post 'post' => 'home#post'
  delete 'destroy' => 'home#destroy'

  # simonsays page
  get 'simonsays' => 'simonsays#simonsays'
  post 'save' => 'simonsays#save'
  post 'randomsave' => 'simonsays#randomsave'
  delete 'delete' => 'simonsays#delete'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
