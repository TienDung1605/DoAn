import React, { useState } from "react";
import "./ProductItem.css"


const ProductItem = ({ item, handleCheckProductInCart }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="product-item">
            {/* {
             !loaded &&
             (
                <img src="https://levents.asia/wp-content/uploads/2022/12/z3952944826899_5a77db95bfadc9405ecf20d58728cbb9-400x500.jpg" alt="poppop figure" />
            )
        } */}
            

            <img src={item?.avatar} 
            alt="product"
            onLoad={() => setLoaded(true)}
            style={{display: loaded ? "block" : "none"}}
            onClick={() => handleCheckProductInCart(item)} 
            />
            <a>{item?.name}</a>
            <div className="p__infor">
                <span>{item?.price} đ</span>             
            </div>
        </div>
    );
};

export default ProductItem