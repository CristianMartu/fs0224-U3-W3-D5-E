import { useEffect } from 'react'
import { Col, Image } from 'react-bootstrap'
import { getFillMusicSection, setDetailSong } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const SongsSection = ({ search }) => {
  const dispatch = useDispatch()
  const songs = useSelector((state) => state.songs.content)

  // dato che ogni fetch parte in contemporanea per tutte le ricerche e quindi si perde la sincronia nel codice,
  // sfrutto il nome passato come paramentro per gestire l'ordine

  const position = () => {
    if (songs.length > 2) {
      for (let i = 0; i < songs.length; i++) {
        const name = songs[i].find((song) => song.artist.name.toLowerCase() === search.toLowerCase())
        if (name) {
          return i
        }
      }
      return -1
    }
  }
  // però se il nome passato come parametro non coincide con quello dell'artista dopo la fetch ritorna undefined,
  // ad esempio katyperry (senza spazio), non è ottimale ma mi è sembrato il modo più semplice e veloce
  // dato che non può essere modificato dall'utente   :(

  useEffect(() => {
    dispatch(getFillMusicSection(search))
  }, [])

  return songs.length > 2 ? (
    position() !== -1 ? (
      songs[position()].slice(0, 4).map((song, index) => {
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
      <h1>Error: wrong search name</h1>
    )
  ) : (
    <h1>empty</h1>
  )
}
export default SongsSection
