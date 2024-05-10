import { DETAIL_SONG } from '../actions'

const initialState = {
  content: [],
  isEmpty: true,
}

const detailSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_SONG:
      return {
        ...state,
        content: action.payload,
        isEmpty: false,
      }

    default:
      return state
  }
}

export default detailSongReducer
