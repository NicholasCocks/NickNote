export const fetchAllTaggables = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/taggables'
    })
}


// api_note_taggable_index POST   /api/notes/:note_id/taggable(.:format)   
export const createTaggable = (note, tag) => {
    return $.ajax({
        method: 'POST',
        url: `api/notes/${note.id}/taggable`,
        data: { tag }
    })
}

// api_note_taggable DELETE /api/notes/:note_id/taggable/:id(.:format)   
export const deleteTaggable = (note, taggable) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${note.id}/taggable/${taggable}`
    })
}