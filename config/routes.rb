Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :locations, only: [:index, :create, :destroy]
    get 'search', to: 'locations#search'
    resource :weather, only: [:show]
  end
end
