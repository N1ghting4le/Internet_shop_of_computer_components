import CartListItem from "../cartListItem/CartListItem";

import { useDeleteFromCartMutation, useAddToCartMutation } from "../../api/apiSlice";
import { useSelector } from "react-redux";

const CartList = () => {
    const {cartItems} = useSelector(state => state.cart);

    const [deleteFromCart] = useDeleteFromCartMutation();
    const [addToCart] = useAddToCartMutation();

    const renderCartList = () => {
        return cartItems.map((item, i) => {
            return <CartListItem key={item.id} item={item} deleteFromCart={deleteFromCart} addToCart={addToCart}/>
        });
    }

    const elements = renderCartList();

    return (
        <ul className='cart_list'>
            {elements}
        </ul>
    );
};

export default CartList;