json.set! note.id do
    json.extract! note, :id, :title, :body, :notebook_id
end