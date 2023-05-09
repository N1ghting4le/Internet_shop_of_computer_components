const CategoryItem = ({name, image, amount}) => {
    const onCategorySelect = () => {
        window.localStorage.setItem('currentCategory', name);
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