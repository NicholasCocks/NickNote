export const fetchNote = (noteId) => {
    return $.ajax({
        method: "GET",
        url: `api/notes/${noteId}`
    })
}

export const createNote = (note) => {
    return $.ajax({
        method: 'POST',
        url: 'api/notes',
        data: { note }
    })
}

export const updateNote = (note) => {
    return $.ajax({
        method: 'PUT',
        url: `api/notes/${note.id}`,
        data: { note }
    })
}

export const deleteNote = (noteId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${noteId}`
    })
}