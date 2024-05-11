import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import SongsSection from './SongsSection'
import MySearch from './MySearch'

const MyMain = () => {
  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col lg={11} className="mainLinks d-none d-md-flex">
          <NavLink to="/TRENDING">TRENDING</NavLink>
          <NavLink to="/PODCAST">PODCAST</NavLink>
          <NavLink to="/MOODS-AND-GENRES">MOODS AND GENRES</NavLink>
          <NavLink to="/NEW-RELEASES">NEW RELEASES</NavLink>
          <NavLink to="/DISCOVER">DISCOVER</NavLink>
        </Col>
      </Row>
      <MySearch />
      <Row className="row">
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
              <SongsSection search={'queen'} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
              <SongsSection search={'katy perry'} />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row xm={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
              <SongsSection search={'eminem'} />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  )
}
export default MyMain
