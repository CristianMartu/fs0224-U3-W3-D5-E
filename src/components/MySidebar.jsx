import { Button, Col, Container, Form, Image, InputGroup, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { getFillMusicSection } from '../redux/actions'
import { useDispatch } from 'react-redux'

const MySidebar = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(getFillMusicSection(search))
    setSearch('')
  }

  return (
    <Col xs={2}>
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <NavLink to="/" className="navbar-brand">
            <Image src={logo} alt="Spotify Logo" width="131" height="40" />
          </NavLink>
          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <NavLink className="nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link d-flex align-items-center" to="/Library">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </NavLink>
                </li>
                <li>
                  <Form onSubmit={handleSubmit}>
                    <InputGroup className="mt-3">
                      <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <div className="input-group-append">
                        <Button variant="outline-secondary" className="btn-sm h-100" type="submit">
                          GO
                        </Button>
                      </div>
                    </InputGroup>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div>
            <NavLink to="/Cookie-Policy">Cookie Policy</NavLink> |<NavLink to="/Privacy"> Privacy</NavLink>
          </div>
        </div>
      </Navbar>
    </Col>
  )
}
export default MySidebar
