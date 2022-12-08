export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book,
    }
}

export const setAddBook = (book) => {
    return {
        type: 'SET_ADD_BOOK',
        payload: book,
    }
}
export const detailBook = (book) => {
    return {
        type: 'DETAIL_BOOK',
        payload: book,
    }
}

export const updateBook = (book) => {
    return {
        type: 'UPDATE_BOOK',
        payload: book,
    }
}

export const cancel = (book) => {
    return {
        type: 'CANCEL',
        payload: book,
    }
}