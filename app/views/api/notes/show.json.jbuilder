json.note do 
    json.extract! @note, :id, :title, :body, :notebook_id
end