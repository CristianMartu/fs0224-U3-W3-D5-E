import { Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setDetailSong } from '../redux/actions'

const MySearch = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.songs.content)
  return search.length > 3 ? (
    <Row className="row">
      <Col xs={10}>
        <div id="rock">
          <h2>My Search</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {search[search.length - 1].slice(0, 4).map((song) => (
              <Col className="text-center" key={song.id} onClick={() => dispatch(setDetailSong(song))}>
                <Image src={song.album.cover_medium} alt="track" />
                <p>
                  Track: {song.title}
                  <br />
                  Artist: {song.artist.name}
                </p>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  ) : (
    <></>
  )
}
export default MySearch
