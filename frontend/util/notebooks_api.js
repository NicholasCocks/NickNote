export const fetchAllNotes = () => {
    return $.ajax({
        method: "GET",
        url: 'api/notes'
    })
}