import { ADD_FAVOURITE_SONGS, REMOVE_FAVOURITE_SONGS } from '../actions'

const initialState = {
  content: [],
}

const favouriteSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_SONGS:
      return {
        ...state,
        content: [...state.content, action.payload],
      }

    case REMOVE_FAVOURITE_SONGS:
      return {
        ...state,
        content: state.content.filter((song) => song.id !== action.payload),
      }
    default:
      return state
  }
}
export default favouriteSongsReducer
