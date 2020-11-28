json.set! taggable.id do
    json.extract! taggable, :id, :note_id, :tag_id
end