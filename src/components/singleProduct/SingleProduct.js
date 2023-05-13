import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseTotalAmount, increaseTotalPrice, addItem } from "../../slices/cartSlice";
import { useEffect, useState } from "react";

const SingleProduct = () => {
    const currentProduct = JSON.parse(window.localStorage.getItem('currentProduct'));
    const {cartItems} = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const {id, name, image, description, price} = currentProduct;

    const [added, setAdded] = useState(false);

    useEffect(() => {
        isInCart();
    }, [cartItems]);

    const createCartObj = () => {
        return {
            id,
            name,
            image,
            description,
            price,
            amount: 1
        }
    }

    const onAddToCart = () => {
        const item = createCartObj();
        dispatch(increaseTotalAmount(1));
        dispatch(increaseTotalPrice(price));
        dispatch(addItem(item));
    }

    const isInCart = () => {
        if (cartItems.length > 0) {
            cartItems.forEach(item => {
                if (item.id === id) {
                    setAdded(true);
                }
            });
        }
    }

    return (
        <>
            <h2>{name}</h2>
            <div className="img_and_descr">
                <img src={`../${image}`} alt={name}></img>
                <div className="description">
                    <span>{description}</span>
                    <div className="wrapper">
                        <h2>{price}$</h2>
                        {
                            added ?
                            <button className="added">added</button> :
                            <button className="add_to_cart" onClick={onAddToCart}>add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;