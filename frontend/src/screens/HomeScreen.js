import React, { useEffect, useState } from 'react'
import Product from "../components/Product"
import axios from "axios"
import { Row, Col } from "react-bootstrap"

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get("/api/products")

            setProducts(data)
        }

        fetchProduct()
    }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
