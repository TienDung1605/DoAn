import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListProductInCart, removeProductInCart } from "../../store/cart/cartActions";
import CartItem from "../CartItem/CartItem"
import "./ListItemCart.css"

const ListItemCart = () => {
    const dispatch = useDispatch();
    const listCartItem = useSelector((state) => state.cart);

    const handleRemoveProductInCart = (id) =>{
        dispatch(removeProductInCart(id));
    };

    useEffect(() => {
        dispatch(fetchListProductInCart());
    }, []);

    return (
        <div className="m-list-cart-container">
            <h1>GIỎ HÀNG</h1>

            <div className="cart-item-container">
                {listCartItem.map((item, index) => (
                    <CartItem
                    item={item}
                    key={index}
                    handleRemoveProductInCart={handleRemoveProductInCart} />
                ))}
            </div>

            <div className="cart-billing-container">
                <div className="cart-apply-code">
                    <div class="fui-input-label-animation">
                        <input type="text" class="form-input" placeholder=" "/>
                        <label for="name" class="form-label">Mã giảm giá</label>
                    </div>
                    <div class="bt-button-1">Sử dụng</div>
                </div>

                
            </div>
        </div>
    )
}

export default ListItemCart;