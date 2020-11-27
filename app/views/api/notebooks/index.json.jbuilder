@notebooks.each do |notebook|
    json.partial! 'api/notebooks/notebook', notebook: notebook
end