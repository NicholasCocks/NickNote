@notes.each do |note|
    json.partial! 'api/notes/note', note: note
end
