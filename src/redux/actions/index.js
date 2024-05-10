export const GET_SONGS = 'GET_SONGS'
export const ADD_PLAYLIST = 'ADD_PLAYLIST'

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
