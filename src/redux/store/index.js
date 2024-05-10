import { combineReducers, configureStore } from '@reduxjs/toolkit'
import songsReducer from '../reducers/songsReducer'
import detailSongReducer from '../reducers/detailSongReducer'
import favouriteSongsReducer from '../reducers/favouriteSongsReducer'

const rootReducer = combineReducers({
  songs: songsReducer,
  detailSong: detailSongReducer,
  favouriteSongs: favouriteSongsReducer,
})
const store = configureStore({
  reducer: rootReducer,
})

export default store
