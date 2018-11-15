Rails.application.routes.draw do

  root "static_pages#home"
  get "/sessions/new", to: "sessions#new"
  post "/sessions/create", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  get "/users/:id/delete", to: "users#delete"
  get "/employees/:id/delete", to: "employees#delete"
  get "/issues/:id/delete", to: "issues#delete"

  # Sorting Issues
  get "/issues/by_effort", to: "issues#effort_sort"
 
  resources :users do
    resources :issues, only: [:index, :new, :edit]
  end

  #resources :users
  resources :issues
  resources :employees

  get '/auth/github/callback', to: 'sessions#create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
