import React, { useContext } from 'react';
import { productContext } from '../context/context';
import Product from './product';

const Products = () => {
     const contex=useContext(productContext);
     const {products}=contex;
     return (
          <div>
               {products.map((product)=>(
                    <Product
                    />
               ))}
          </div>
       );
}
 
export default Products;