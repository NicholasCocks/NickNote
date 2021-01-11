# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_notes GET    /api/notes(.:format)                                                                     api/notes#index {:format=>:json}
#                           POST   /api/notes(.:format)                                                                     api/notes#create {:format=>:json}
#                  api_note GET    /api/notes/:id(.:format)                                                                 api/notes#show {:format=>:json}
#                           PATCH  /api/notes/:id(.:format)                                                                 api/notes#update {:format=>:json}
#                           PUT    /api/notes/:id(.:format)                                                                 api/notes#update {:format=>:json}
#                           DELETE /api/notes/:id(.:format)                                                                 api/notes#destroy {:format=>:json}
#           api_notes_trash DELETE /api/notes/trash(.:format)                                                               api/notes#trash {:format=>:json}
#             api_notebooks GET    /api/notebooks(.:format)                                                                 api/notebooks#index {:format=>:json}
#                           POST   /api/notebooks(.:format)                                                                 api/notebooks#create {:format=>:json}
#              api_notebook PATCH  /api/notebooks/:id(.:format)                                                             api/notebooks#update {:format=>:json}
#                           PUT    /api/notebooks/:id(.:format)                                                             api/notebooks#update {:format=>:json}
#                           DELETE /api/notebooks/:id(.:format)                                                             api/notebooks#destroy {:format=>:json}
#                  api_tags GET    /api/tags(.:format)                                                                      api/tags#index {:format=>:json}
#                           POST   /api/tags(.:format)                                                                      api/tags#create {:format=>:json}
#                   api_tag GET    /api/tags/:id(.:format)                                                                  api/tags#show {:format=>:json}
#                           PATCH  /api/tags/:id(.:format)                                                                  api/tags#update {:format=>:json}
#                           PUT    /api/tags/:id(.:format)                                                                  api/tags#update {:format=>:json}
#                           DELETE /api/tags/:id(.:format)                                                                  api/tags#destroy {:format=>:json}
#             api_taggables GET    /api/taggables(.:format)                                                                 api/taggables#index {:format=>:json}
#                           POST   /api/taggables(.:format)                                                                 api/taggables#create {:format=>:json}
#              api_taggable DELETE /api/taggables/:id(.:format)                                                             api/taggables#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :notes, only: [:index, :show, :create, :update, :destroy] do
      # resources :taggables, only: [:create, :destroy]
    end
    match 'notes/trash' => 'notes#trash', :via => :delete
    resources :notebooks, only: [:index, :create, :destroy, :update]
    resources :tags, only: [:index, :show, :create, :destroy, :update] 
    resources :taggables, only: [:index, :create, :destroy]
  end
  root to: 'static_pages#root'
end
