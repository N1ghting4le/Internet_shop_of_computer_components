import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { increaseTotalAmount, increaseTotalPrice, decreaseTotalAmount, decreaseTotalPrice, increaseItemAmount, decreaseItemAmount, removeItem } from "../../slices/cartSlice";

const CartListItem = ({item, deleteFromCart, addToCart}) => {
    const {id, name, image, description, price} = item;

    const [amount, setAmount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if (item) {
            setAmount(item.amount);
        }
    }, [item]);

    const deleteItemRequest = () => {
        dispatch(decreaseTotalAmount(amount));
        dispatch(decreaseTotalPrice(amount * price));
        dispatch(removeItem(id));
        deleteFromCart(id);
    }

    const onAmountIncrease = () => {
        setAmount(amount => amount + 1);
        dispatch(increaseTotalAmount(1));
        dispatch(increaseTotalPrice(price));
        dispatch(increaseItemAmount(id));
        deleteFromCart(id);
        addToCart({...item, amount: item.amount + 1}).unwrap();
    }

    const onAmountDecrease = () => {
        if (amount > 1) {
            setAmount(amount => amount - 1);
            dispatch(decreaseTotalAmount(1));
            dispatch(decreaseTotalPrice(price));
            dispatch(decreaseItemAmount(id));
            deleteFromCart(id);
            addToCart({...item, amount: item.amount - 1}).unwrap();
        }
    }

    return (
        <li className="cart_list_item">
            <img src={image} alt={name}></img>
                <div className="info">
                    <span className="name">{name}</span>
                    <span className="description">{description}</span>
                </div>
                <div className="counter_and_rubbish">
                    <button className="rubbish_bin" onClick={deleteItemRequest}><img src="images/rubbish_bin.png" alt="rubbish bean"></img></button>
                    <div className="counter">
                        <span className="sign" onClick={onAmountDecrease}>-</span>
                        <span>{amount}</span>
                        <span className="sign" onClick={onAmountIncrease}>+</span>
                    </div>
                </div>
                <div className="buying">
                    <span className="price">{amount * price}$</span>
                </div>
        </li>
    );
};

export default CartListItem;