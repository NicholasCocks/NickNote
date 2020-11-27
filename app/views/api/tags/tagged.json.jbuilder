
@tags.each do |tag|
    json.partial! 'api/tags/tag', tag: tag
end
