import { setCurrentProduct } from '../../slices/singleProductSlice';
import { useDispatch } from 'react-redux'; 

const ProductItem = ({item}) => {
    const {name, image, description, price} = item;

    const dispatch = useDispatch();

    const onProductSelect = () => {
        dispatch(setCurrentProduct(item));
    }

    return (
        <li className="product_item" onClick={onProductSelect}>
            <img src={image} alt={name}></img>
            <div className="info">
                <span className="name">{name}</span>
                <span className="description">{description}</span>
            </div>
            <div className="buying">
                <span className="price">{price}$</span>
            </div>
        </li>
    );
};

export default ProductItem;