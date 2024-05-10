import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { Container, Row } from 'react-bootstrap'
import MySidebar from './components/MySidebar'
import MyMain from './components/MyMain'
import MyPlayer from './components/MyPlayer'

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <MySidebar />
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="*" element={<MyMain />} />
          </Routes>
        </Row>
      </Container>
      <MyPlayer />
    </BrowserRouter>
  )
}

export default App
