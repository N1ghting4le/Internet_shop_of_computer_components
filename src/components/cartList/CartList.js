import CartListItem from "../cartListItem/CartListItem";

import { useSelector } from "react-redux";

const CartList = () => {
    const {cartItems} = useSelector(state => state.cart);

    const renderCartList = () => {
        return cartItems.map(item => {
            return <CartListItem key={item.id} item={item}></CartListItem>
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