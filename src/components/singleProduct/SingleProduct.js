import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useGetCartProductsQuery, useAddToCartMutation } from "../../api/apiSlice";
import { increaseTotalAmount, increaseTotalPrice, addItem } from "../../slices/cartSlice";
import { useEffect, useState } from "react";

const SingleProduct = () => {
    const {currentProduct} = useSelector(state => state.product);
    const {initial} = useSelector(state => state.cart);
    const [addToCart] = useAddToCartMutation();

    const dispatch = useDispatch();

    const {
        data: response = []
    } = useGetCartProductsQuery();

    const {id, name, image, description, price} = currentProduct;

    const [added, setAdded] = useState(false);

    useEffect(() => {
        isInCart();
    }, [response]);

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
        addToCart(item).unwrap();
        if (!initial) {
            dispatch(increaseTotalAmount(1));
            dispatch(increaseTotalPrice(price));
            dispatch(addItem(item));
        }
    }

    const isInCart = () => {
        if (response.length > 0) {
            response.forEach(item => {
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