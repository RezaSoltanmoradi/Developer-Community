import React, { Fragment } from 'react';
const Product = () => {
    return (
        <Fragment>
            <button
                className="btn btn-lg btn-outline-success"
                onClick={products}
            >
                نمایش کالا ها
            </button>
            <div className="card w-25 text-center">
                <div className="card-header px-0">
                    <img
                        className="card-img-top img-fluid"
                        src={image}
                        alt="Card image cap"
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title"> {category}</h4>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <p className="card-text">${price}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Product;
