import { Col, Placeholder } from 'react-bootstrap'

const LoadingSection = () => {
  const repetitions = [0, 1, 2, 3]
  return repetitions.map((elem) => {
    return (
      <Col className="text-center" key={elem}>
        <Placeholder animation="glow">
          <div style={{ width: '200px%', height: '200px' }}>
            <Placeholder className="w-100 h-100" />
          </div>
        </Placeholder>
        <small>
          <Placeholder animation="glow">
            <Placeholder xs={10} />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
        </small>
      </Col>
    )
  })
}
export default LoadingSection
