import React from 'react'
import AddProduct from './AddProduct'

export default function ProductsData(props) {
    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Write Your Code Here */}
                </tbody>
            </table>
        </div>
    )
}
