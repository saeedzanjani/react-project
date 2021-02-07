import React from 'react'

import './Product.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card className="my-3 mx-2 p-3 rounded mycard">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="h3">{product.name}</Card.Title>
            </Link>
            </Card.Body>
            {/* <Card.Text>{product.description}</Card.Text> */}
            <Card.Text as="h3">قیمت: {product.price} تومان</Card.Text>
        </Card>
    )
}

export default Product
