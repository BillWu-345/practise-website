Rails.application.routes.draw do
  # for copy+pasting

  # main page
  root 'home#home'
  post 'post' => 'home#post'
  delete 'destroy' => 'home#destroy'

  # simonsays page
  get 'simonsays' => 'simonsays#simonsays'
  post 'save' => 'simonsays#save'
  post 'manualSave' => 'simonsays#manualSave'
  delete 'delete' => 'simonsays#delete'
  delete 'delete2' => 'simonsays#delete2'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
