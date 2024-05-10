import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import shuffle from '../assets/playerbuttons/shuffle.png'
import prev from '../assets/playerbuttons/prev.png'
import play from '../assets/playerbuttons/play.png'
import next from '../assets/playerbuttons/next.png'
import repeat from '../assets/playerbuttons/repeat.png'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite, removeFavourite } from '../redux/actions'

const MyPlayer = () => {
  const dispatch = useDispatch()
  const song = useSelector((state) => state.detailSong.content)
  const favourites = useSelector((state) => state.favouriteSongs.content)
  const isEmpty = useSelector((state) => state.detailSong.isEmpty)
  const isFavourite = favourites.findIndex((fav) => fav.id === song.id) !== -1

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center ">
              {!isEmpty && <Image src={song.album.cover_small} className="me-3" />}
              {!isEmpty && <p className="text-white me-3">{song.title}</p>}
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex">
                  <Nav.Link href="#">
                    <Image src={shuffle} alt="shuffle" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Image src={prev} alt="prev" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Image src={play} alt="play" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Image src={next} alt="next" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Image src={repeat} alt="repeat" />
                  </Nav.Link>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
              {!isEmpty && (
                <i
                  className={isFavourite ? 'bi bi-heart-fill my-auto colorSelected' : 'bi bi-heart-fill my-auto'}
                  onClick={() => {
                    if (!isFavourite) {
                      dispatch(addFavourite(song))
                    } else {
                      dispatch(removeFavourite(song.id))
                    }
                  }}
                ></i>
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default MyPlayer
