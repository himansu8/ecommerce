import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminSideBar from '../../components/layout/AdminSideBar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

function Products() {
    const [products, setProducts] = useState([])
    //get all products
    const gerAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/product/all-product`)
            setProducts(data.products)
            //console.log(products)
        } catch (error) {
            console.log(error)
            toast.error("something wrong in get all products")
        }
    }

    useEffect(() => {
        gerAllProducts()
    })
    return (
        <Layout>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSideBar />
                </div>
                <div className='col-md-9'>
                    <h1 className='text-center'>All Products</h1>
                    <div className="d-flex">
                        {products?.map((ele) => (
                            <Link key={ele._id}
                                to={`/dashboard/admin/products/${ele.slug}`}
                                className='product-link'>
                                <div className="card m-2" style={{ width: "18rem" }}>
                                    <img
                                        src={`${process.env.REACT_APP_BASE_URL}/api/product/product-photo/${ele._id}`}
                                        className="card-img-top"
                                        alt={ele.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{ele.name}</h5>
                                        <p className="card-text">{ele.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products
