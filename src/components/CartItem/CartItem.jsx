import { useState } from "react";
import "./CartItem.css"

const CartItem = ({item, handleRemoveProductInCart}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="CartItem_container">
            <div className="cart-item">
                {!loaded && (
                    <div></div>
                )}

                <div className="cart-product-item-infor">
                    <h3>{item.title}</h3>
                    <div className="cart-product-item-infor2">
                        <p>Kích cỡ SIZE 2</p>
                        <p>x 1</p>
                    </div>
                </div>
            </div>

            <div className="cart-item">
                <div className="cart-price-container">
                    <div className="c-price-container">
                        <p>Tạm tính</p>
                        <p>{Math.round(item.price * (1 - 0.01 * item.discount) * 100) / 100}{" "}đ</p>
                    </div>

                    <div className="cart-total-order">
                        <div className="c-total-order">
                            <div>Tổng</div>
                            <div>395,000đ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem