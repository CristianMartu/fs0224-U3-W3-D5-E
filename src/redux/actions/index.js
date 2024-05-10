export const GET_SONGS = 'GET_SONGS'
export const DETAIL_SONG = 'DETAIL_SONG'
export const ADD_FAVOURITE_SONGS = 'ADD_FAVOURITE_SONGS'
export const REMOVE_FAVOURITE_SONGS = 'REMOVE_FAVOURITE_SOGS'

export const getFillMusicSection = (artistName) => {
  return async (dispatch, getState) => {
    console.log('GET STATE', getState())
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName)
      if (response.ok) {
        let { data } = await response.json()
        dispatch({ type: GET_SONGS, payload: data })
      } else {
        throw new Error('Error in fetching songs')
      }
    } catch (err) {
      console.log('error', err)
    }
  }
}

export const setDetailSong = (song) => ({ type: DETAIL_SONG, payload: song })

export const addFavourite = (song) => ({ type: ADD_FAVOURITE_SONGS, payload: song })
export const removeFavourite = (id) => ({ type: REMOVE_FAVOURITE_SONGS, payload: id })
