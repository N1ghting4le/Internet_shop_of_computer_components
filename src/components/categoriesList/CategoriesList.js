import CategoryItem from "../categoryItem/CategoryItem";
import Spinner from "../spinner/Spinner";

import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../api/apiSlice";

const CategoriesList = () => {
    const {
        data: response = {},
        isLoading,
        isError
    } = useGetCategoriesQuery();
    let categories = [];

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h3>Error</h3>
    } else {
        categories = response;
    }

    const renderCategoriesList = () => {
        return categories.map(item => {
            return <Link key={item.id} to={item.name}><CategoryItem name={item.name} image={item.image} amount={item.amount}/></Link>;
        });
    }

    const elements = renderCategoriesList();

    return (
        <ul className='categories_list'>
            {elements}
        </ul>
    );
};

export default CategoriesList;