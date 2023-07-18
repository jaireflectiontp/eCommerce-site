import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    const params = useParams();
    const { title } = params
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default ProductDetailsPage
