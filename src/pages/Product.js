import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap'
import products from '../products'
import axios from 'axios'

const Product = ({ match }) => {
    const product = products.find((item) => {
        return item._id === match.params.id
    })

    // const [product, setProduct] = useState({})

    // useEffect(() => {
    //     const getProduct = async () => {
    //         const response = await axios.get(`http://localhost:8000/api/products/${match.params.id}`)

    //         setProduct(response.data)
    //     }
    //     getProduct()
    // }, match)

    return (
        <div>
            <Link to="/" className="btn btn-danger my-3">
                بازگشت به صفحه اصلی
            </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} fluid />
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h5>قیمت: {product.price} تومان</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup>
                    <ListGroup.Item>
                        <Button className="btn-block" type="button">
                            افزودن به سبد خرید
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        </div>
    )
}

export default Product