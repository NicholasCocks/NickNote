export const fetchAllTags = () => {
    return $.ajax({
        method: "GET",
        url: 'api/tags'
    })
}

export const fetchTag = (tagId) => {
    return $.ajax({
        method: "GET",
        url: `api/notes/${tagId}`
    })
}

export const createTag = (tag) => {
    return $.ajax({
        method: 'POST',
        url: 'api/tags',
        data: { tag }
    })
}

export const updateTag = (tag) => {
    return $.ajax({
        method: 'PUT',
        url: `api/tags/${tag.id}`,
        data: { tag }
    })
}

export const deleteTag = (tag) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tags/${tag.id}`
    })
}