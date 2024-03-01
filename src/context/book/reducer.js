// TODO: import actions and implement reducer for each action
import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from './actions'
export default function reducer(initialState, { action, payload }) {
  const { favoriteBooks, bookSearchResults } = initialState
  switch (action) {
    case ADD_BOOK:
      const addState = {
        ...initialState,
        favoriteBooks: [...favoriteBooks, payload]
      }
      saveToLocalStorage(addState.favoriteBooks)
      return addState
    case REMOVE_BOOK:
      const removeState = {
        ...initialState,
        favoriteBooks: favoriteBooks.filter(favoriteBook => favoriteBook.id !== payload)
      }
      saveToLocalStorage(removeState.favoriteBooks)
      return removeState
    case SEARCH_BOOKS:
      return {
        ...initialState,
        bookSearchResults: payload
      }
    default:
      return initialState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}