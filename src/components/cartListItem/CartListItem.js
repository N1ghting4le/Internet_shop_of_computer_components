import { useDispatch } from "react-redux";
import { increaseTotalAmount, increaseTotalPrice, decreaseTotalAmount, decreaseTotalPrice, increaseItemAmount, decreaseItemAmount, removeItem } from "../../slices/cartSlice";

const CartListItem = ({item}) => {
    const {id, name, image, description, price, amount} = item;

    const dispatch = useDispatch();

    const deleteItemRequest = () => {
        dispatch(decreaseTotalAmount(amount));
        dispatch(decreaseTotalPrice(amount * price));
        dispatch(removeItem(id));
    }

    const onAmountIncrease = () => {
        dispatch(increaseTotalAmount(1));
        dispatch(increaseTotalPrice(price));
        dispatch(increaseItemAmount(id));
    }

    const onAmountDecrease = () => {
        if (amount > 1) {
            dispatch(decreaseTotalAmount(1));
            dispatch(decreaseTotalPrice(price));
            dispatch(decreaseItemAmount(id));
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