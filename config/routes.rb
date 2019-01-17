Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    resources :issues
  end

  resources :issues
  resources :users
  resources :employees
end
