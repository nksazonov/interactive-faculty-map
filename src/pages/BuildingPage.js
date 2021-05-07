import React from 'react'

import Map from '../components/Map'
import FloorItem from '../components/FloorItem'
import CustomLink from '../components/CustomLink'
import building from '../data/building.png'
import { Container, Row, Col, Breadcrumb, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FaQuestion } from 'react-icons/fa'

const floorsData = require('../data/floors.json')

const BuildingPage = () => {
  return (
    <>
      <Container fluid className="px-5 position-fixed bg-light-gray">
        <Row>
          <Col />

          <Col xs="auto">
            <Breadcrumb bsPrefix="breadcrumb header-text bg-transparent mb-0">
              <Breadcrumb.Item active className="text-dark">
                Факультет комп’ютерних наук та кібернетики
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>

          <Col className="d-flex align-items-center justify-content-end">
            <OverlayTrigger
              key="info"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-info">
                  <strong>Оберіть поверх</strong>, натиснувши на нього на мапі або у списку
                </Tooltip>
              }
            >
              <Badge pill className="p-1 text-secondary"><FaQuestion size={22} /></Badge>
            </OverlayTrigger>
          </Col>
        </Row>
        
        
        

      </Container>

      <Container fluid className="px-5 min-vh-100 d-flex justify-content-center flex-column">
        
        <Row>
          <Col className="text-center">
            <span className="sf-text text-secondary">Оберіть поверх</span>
          </Col>
        </Row>

        <Row>
          <Col>
            <Map className="d-flex justify-content-end mr-3" asset={building} />
          </Col>

          <Col>
            <div className="d-flex flex-column-reverse align-items-start h-100">
              { floorsData.map(floor => <CustomLink key={ floor.id } to={`/${floor.id}`} className="fi-block text-secondary">
                  <FloorItem floorNum={ floor.num } floorText={ floor.description } />
                </CustomLink> ) }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BuildingPage;