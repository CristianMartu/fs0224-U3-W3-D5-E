import { GET_SONGS } from '../actions'

const initialState = {
  content: [],
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    default:
      return state
  }
}

export default songsReducer

// content: action.payload,
