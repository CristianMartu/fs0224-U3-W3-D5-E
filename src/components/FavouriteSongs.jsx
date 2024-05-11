import { Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeFavourite } from '../redux/actions'

const FavouriteSongs = () => {
  const favouriteSongs = useSelector((state) => state.favouriteSongs.content)

  const dispatch = useDispatch()

  return (
    <Col xs={9} className="offset-md-3 mainPage my-3">
      <Row>
        <Col lg={11} className="mainLinks d-none d-md-flex">
          <NavLink to="/TRENDING">TRENDING</NavLink>
          <NavLink to="/PODCAST">PODCAST</NavLink>
          <NavLink to="/MOODS-AND-GENRES">MOODS AND GENRES</NavLink>
          <NavLink to="/NEW-RELEASES">NEW RELEASES</NavLink>
          <NavLink to="/DISCOVER">DISCOVER</NavLink>
        </Col>
      </Row>
      <h2 className="text-white my-4">Favourite song</h2>
      <Row>
        {favouriteSongs.length > 0 ? (
          favouriteSongs.map((song, index) => (
            <Col xs={12} key={song.id}>
              <div className="d-flex align-items-center justify-content-start text-white my-1">
                <div className="align-middle opacity-50 text-end" style={{ width: '25px' }}>
                  {index + 1}
                </div>
                <Image src={song.album.cover_small} alt="Cover del brano" className="ms-3" style={{ width: '50px' }} />
                <div className="ms-3 me-auto">
                  <div className="fw-bold">{song.title}</div>
                  <p className="fw-normal m-0 opacity-50 mb-2">{song.artist.name}</p>
                </div>
                <i
                  className="bi bi-heart-fill my-auto colorSelected me-sm-5"
                  onClick={() => {
                    dispatch(removeFavourite(song.id))
                  }}
                ></i>
              </div>
            </Col>
          ))
        ) : (
          <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col className="text-white">Empty</Col>
          </Row>
        )}
      </Row>
    </Col>
  )
}
export default FavouriteSongs
