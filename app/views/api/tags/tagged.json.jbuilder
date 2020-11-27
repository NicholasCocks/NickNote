
@tags.each do |note|
    json.partial! 'api/tags/tag', tag: tag
end
