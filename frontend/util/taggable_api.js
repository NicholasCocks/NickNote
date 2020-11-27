// api_tag_notes_with_tag GET    /api/tags/:tag_id/notes_with_tag(.:format)
export const findNotesWithTag = (tag) => {
    return $.ajax({
        method: 'GET',
        url: `api/tags/${tag.id}/notes_with_tag`
    })
}

// api_note_tags_with_note GET    /api/notes/:note_id/tags_with_note(.:format) 
export const findTagsWithNote = (note) => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${note.id}/tags_with_note`,
    })
}