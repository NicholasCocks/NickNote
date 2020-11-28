@taggables.each do |taggable|
    json.partial! 'api/taggables/taggable', taggable: taggable
end