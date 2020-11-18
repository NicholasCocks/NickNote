export const fetchNotes = () => {
    return $.ajax({
        method: "GET",
        url: 'api/notes'
    })
}