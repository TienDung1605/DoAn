import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../store/cart/cartSlice";
import "./CartItem.css"

function CartItem({id,item,quantity=0}) {
    const dispatch = useDispatch();
    // const [loaded, setLoaded] = useState(false);
    const cart = useSelector((state) => state.cart)
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return {totalQuantity, totalPrice}
    }

    return (
        <div className="CartItem_container">
            <div className="cart-item">
                {/* {!loaded && ( */}

                    <img src="{image}" 
                    alt="product"
                    // onLoad={() => setLoaded(true)}
                    // style={{display: loaded ? "block" : "none"}} 
                    />
                {/* )} */}

                <div className="cart-product-item-infor">
                    <h3>{item.title}</h3>
                    <div className="cart-product-item-infor2">
                        <p>Kích cỡ SIZE 2</p>
                        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                    </div>
                </div>
            </div>

            <div className="cart-item">
                <div className="cart-price-container">
                    <div className="c-price-container">
                        <p>Tạm tính</p>
                        <p>{getTotal().totalPrice} đ</p>
                    </div>

                    <div className="cart-total-order">
                        <div className="c-total-order">
                            <div>Tổng</div>
                            <strong>{getTotal().totalPrice} đ</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem