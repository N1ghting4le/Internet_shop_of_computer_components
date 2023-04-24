import ProductItem from "../productItem/ProductItem";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductsList = ({productsList, filtersList}) => {
    const {activeFilters} = useSelector(state => state.filters);
    const names = filtersList.map(item => item.name);

    const filterProductsByOneFilter = (name, arr) => {
        if (activeFilters.length > 0) {
            let filtersWithOneName = activeFilters.filter(item => item.name === name);
            if (filtersWithOneName.length === 0) {
                return arr;
            }
            let values = filtersWithOneName.map(item => item.value);
            let filteredItems = [];

            arr.forEach(item => {
                item.filters.forEach(filter => {
                    if (values.includes(filter) && !filteredItems.includes(item)) {
                        filteredItems.push(item);
                    }
                });
            });
            
            return filteredItems;
        }
        return arr;
    }

    const filterProducts = (names) => {
        if (names.length === 2) {
            return filterProductsByOneFilter(names[1], filterProductsByOneFilter(names[0], productsList));
        }
        const name = names[names.length - 1];
        return filterProductsByOneFilter(name, filterProducts(names.slice(0, names.length - 1)));
    }

    const renderProductsList = (arr) => {
        return arr.map(item => {
            return <Link key={item.id} to={`${item.id}`}><ProductItem item={item}/></Link>;
        });
    }

    const elements = renderProductsList(filterProducts(names));

    return (
        <ul className='products_list'>
            {elements.length > 0 ? elements : <h3 className="message">There are no products which suit to chosen filters</h3>}
        </ul>
    );
};

export default ProductsList;