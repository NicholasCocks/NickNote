export const fetchAllTaggables = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/taggables'
    })
}


// POST   /api/taggables(.:format)    
export const createTaggable = (note, tag) => {
    return $.ajax({
        method: 'POST',
        url: `api/taggables`,
        data: { note, tag }
    })
}

// api_taggable DELETE / api / taggables /: id(.: format)
export const deleteTaggable = (taggable) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/taggables/${taggable.id}`
    })
}