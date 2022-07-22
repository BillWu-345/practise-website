Rails.application.routes.draw do

  # main page
  root 'home#home'
  post 'post' => 'home#post'
  delete 'destroy' => 'home#destroy'

  # simonsays page
  get 'simonsays' => 'simonsays#simonsays'
  post 'save' => 'simonsays#save'
  delete 'delete' => 'simonsays#delete'

  # about page
  get 'about' => 'home#about'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
