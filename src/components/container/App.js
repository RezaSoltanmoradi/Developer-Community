import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { productContext } from '../context/context';
import Products from '../products/products';
const App = () => {
    //  محصولات گرفته شده داخل ارایه هست اماده برای نقشه زدن
    const [products, setproducts] = useState([]);
    const handleRequest = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => {
                setproducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <productContext.Provider
            value={{
                products: products,
                handleRequest: handleRequest,
            }}
        >
            <Fragment>
                <h3 className="alert alert-success text-center">
                    برنامه روزانه
                </h3>
                <div className="d-flex justify-content-center container mt-4 ">
                    <div className="col-md-8">
                        <div className="card-hover-shadow-2x mb-3 card">
                            <Products/>
                        </div>
                    </div>
                </div>
            </Fragment>
        </productContext.Provider>
    );
};

export default App;
