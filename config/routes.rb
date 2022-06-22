Rails.application.routes.draw do
  get 'welcome/index'
  get 'promo/index'
  root 'promo#index'
end
