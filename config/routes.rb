Rails.application.routes.draw do
  resources :emails
  get 'welcome/index'
  get 'promo/index'
  # root 'promo#index'

  get 'emails/index'
  root 'emails#new'
end
