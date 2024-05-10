import { Col, Image, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MySearch = () => {
  const search = useSelector((state) => state.songs.content)
  return search.length > 0 ? (
    <Row className="row">
      <Col xs={10}>
        <div id="rock">
          <h2>My Search</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {search.slice(0, 4).map((song, index) => (
              <Col className="text-center" key={index}>
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
    <h2></h2>
  )
}
export default MySearch
