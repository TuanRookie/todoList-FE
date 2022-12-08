
const initState = {
    listBooks: {

    },
    flag: 0,
    open: false,
}

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                flag: 0,
                open: false,
            }
        case 'SET_ADD_BOOK':
            return {
                ...state,
                listBooks: action.payload,
                flag: 1,
                open: true,
            }
        case 'DETAIL_BOOK':
            return {
                ...state,
                listBooks: action.payload,
                flag: 2,
                open: true,
            }
        case 'UPDATE_BOOK':
            return {
                ...state,
                flag: 0,
                open: false,
            }
        case 'CANCEL':
            return {
                ...state,
                open: false,
            }
        default:
            return state;
    }
}
export default bookReducer;