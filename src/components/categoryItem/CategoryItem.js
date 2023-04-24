import { setCurrentCategory } from "../../slices/categoriesSlice";
import { useDispatch } from 'react-redux';

const CategoryItem = ({name, image, amount}) => {
    const dispatch = useDispatch();

    const onCategorySelect = () => {
        dispatch(setCurrentCategory(name));
    }

    return (
        <li className="category_item" onClick={onCategorySelect}>
            <img src={image} alt={name}></img>
            <div className="icon_wrapper">
                <div className="icon_name">{name}</div>
                <div className="amount">{amount}</div>
            </div>
        </li>
    );
};

export default CategoryItem;