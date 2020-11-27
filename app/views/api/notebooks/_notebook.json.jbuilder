json.set! notebook.id do
    json.extract! notebook, :id, :title, :updated_at, :first_notebook
end