export const fetchAllNotebooks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/notebooks'
    })
}

export const fetchNotebook = (notebookId) => {
    return $.ajax({
        method: 'GET',
        url: `api/notebooks/${notebookId}`
    })
}

export const createNotebook = (notebook) => {
    return $.ajax({
        method: 'POST',
        url: 'api/notebooks',
        data: { notebook }
    })
}

export const updateNotebook = (notebook) => {
    return $.ajax({
        method: 'PUT',
        url: `api/notebooks/${notebook}`,
        data: { notebook }
    })
}

export const deleteNotebook = (notebookId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${notebookId}`
    })
}