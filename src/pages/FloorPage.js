import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

import Map from '../components/Map'
import Room from '../components/Room'
import floorMap from '../data/floor_1.png'

const floorsData = require('../data/floors.json')

const FloorPage = ({ style }) => {
  const { floorId } = useParams();
  const floor = floorsData.find(floor => floor.id === floorId);

  if (!floor) {
    return <Redirect to='/404-page-not-found' />
  }

  return (
    <>
      <Container fluid className="px-5 position-fixed d-flex justify-content-center align-items-center bg-light-gray">

      <Breadcrumb bsPrefix="breadcrumb header-text bg-transparent mb-0">
        <Breadcrumb.Item>
          <Link to="/" className="text-secondary text-underline">ФКНК</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active className="text-dark">
          { `Поверх ${floor.num}` }
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* <OverlayTrigger
        key="info"
        placement="bottom"
        overlay={
          <Tooltip id="tooltip-info">
            Оберіть поверх
          </Tooltip>
        }
      >
        <Badge pill className="h-100 p-1 text-secondary"><FaQuestion size={22} /></Badge>
      </OverlayTrigger> */}
      </Container>

      <Container fluid className="px-5 min-vh-100 d-flex justify-content-center flex-column">
        
        <Row>
          <Col className="text-center">
            <span className="sf-text text-secondary">Наведіть чи натисніть на кабінет на мапі чи у списку</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Map className="d-flex justify-content-end" asset={floorMap} height={800} />
          </Col>

          <Col>
            <div className="d-flex flex-column">
              <div className="d-flex flex-wrap w-100 mb-4">
                <Room name="Список" / >
                <Room name="найважливіших" / >
                <Room name="об’єктів" / >
                <Room name="поверху" / >
                <Room name="Майстерня" / >
                <Room name="Туалет" / >
                <Room name="Туалет" / >
                <Room name="Комора" / >
                <Room name="Актова" / >
              </div>
              <div className="fi-text">
                { floor.description }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FloorPage;