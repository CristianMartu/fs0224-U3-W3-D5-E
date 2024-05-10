import { useEffect, useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import { setDetailSong } from '../redux/actions'
import { useDispatch } from 'react-redux'

const SongsSection = ({ search }) => {
  const [songs, setSongs] = useState([])

  const dispatch = useDispatch()

  const handleFetch = async (artistName) => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName)
      if (response.ok) {
        let { data } = await response.json()
        setSongs(data)
      } else {
        throw new Error('Error in fetching songs')
      }
    } catch (err) {
      console.log('error', err)
    }
  }

  useEffect(() => {
    handleFetch(search)
  }, [])

  return songs ? (
    songs.slice(0, 4).map((song, index) => {
      return (
        <Col className="text-center" key={index} onClick={() => dispatch(setDetailSong(song))}>
          <Image src={song.album.cover_medium} alt="track" />
          <p>
            Track: {song.title}
            <br />
            Artist: {song.artist.name}
          </p>
        </Col>
      )
    })
  ) : (
    <h1>vuoto</h1>
  )
}
export default SongsSection
