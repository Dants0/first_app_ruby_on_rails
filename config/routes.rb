Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome', to: 'welcome#index', as: 'welcome'
  get 'calculadora', to: 'calculadora#index', as: 'calculadora'
end
