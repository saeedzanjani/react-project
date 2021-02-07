import React,{useState, useEffect} from 'react'

import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product/Product'
import Slider from '../components/slider/Slider'

const HomePage = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const sendRequest = async () => {
    //         const response = await axios.get("http://localhost:8000/api/products")

    //         setProducts(response.data)
    //     }
        
    //     sendRequest()
    // }, [])

    return (
        <div>
            <Slider />            
            <h1>محصولات</h1>
            <Row>
                {products.map((item) => {
                    return (
                        <Col key={item._id} sm={12} md={12} lg={6}>
                            <Product 
                            product={item}
                            />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default HomePage