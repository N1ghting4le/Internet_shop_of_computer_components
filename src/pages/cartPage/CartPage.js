import CartList from '../../components/cartList/CartList';
import Spinner from '../../components/spinner/Spinner';

import { useGetCartProductsQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCartItems, toggleInitial, increaseTotalAmount, increaseTotalPrice } from '../../slices/cartSlice';

import './cartPage.css';

const CartPage = () => {
    const {totalAmount, totalPrice, initial} = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const {
        data: response = [],
        isLoading,
        isError
    } = useGetCartProductsQuery();

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h3>Error</h3>;
    } else if (initial) {
        dispatch(setCartItems(response));
        dispatch(toggleInitial());
        response.forEach(item => {
            dispatch(increaseTotalPrice(item.amount * item.price));
            dispatch(increaseTotalAmount(item.amount));
        });
    }

    return (
        <main className='cart_page_main'>
            <h2 className='cart_header'>Cart</h2>
            {response.length > 0 ?
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