import CartList from '../../components/cartList/CartList';

import { useSelector } from 'react-redux';

import './cartPage.css';

const CartPage = () => {
    const {totalAmount, totalPrice, cartItems} = useSelector(state => state.cart);

    return (
        <main className='cart_page_main'>
            <h2 className='cart_header'>Cart</h2>
            {cartItems.length > 0 ?
                <>
                    <div className="amount_and_price">{totalAmount} items worth {totalPrice}$</div>
                    <CartList/>
                    <button className="order">Order now</button>
                </> :
                <h3 className="message">Your cart is empty</h3>
            }
        </main>
    );
};

export default CartPage;