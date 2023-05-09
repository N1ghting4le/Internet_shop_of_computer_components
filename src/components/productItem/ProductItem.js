const ProductItem = ({item}) => {
    const {name, image, description, price} = item;

    const onProductSelect = () => {
        window.localStorage.setItem('currentProduct', JSON.stringify(item));
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