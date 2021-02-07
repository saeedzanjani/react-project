import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row  variant="primary" bg="dark">
                    <Col>
                    <Link><i style={{fontSize: "24px", color: "red"}} className="fa fa-instagram my-3 mx-4"></i></Link>
                    <Link><i style={{fontSize: "24px", color: "green"}} className="fa fa-whatsapp my-3 mx-4"></i></Link>
                    <Link><i style={{fontSize: "24px", color: "blue"}} className="fa fa-telegram my-3 mx-4"></i></Link>
                    </Col>
                </Row>
                <Row className="text-dark text-lg-right" variant="secondary" bg="dark">
                    <Col style={{fontWeight: "500"}} className="my-2">ادرس شرکت: تهران تهران</Col>
                </Row>
                <Row className="text-dark text-lg-right" variant="primary" bg="dark">
                    <Col style={{fontWeight: "500"}} className="my-2">شماره تماس: 0211111111</Col>
                </Row>
                <Row className="text-dark" variant="primary" bg="dark">
                    <Col style={{fontWeight: "500"}} className="my-2">این سایت توسط سعید صفری ساخته شده<i className="fa fa-copyright"></i></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
