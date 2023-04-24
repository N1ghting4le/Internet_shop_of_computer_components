import Filters from '../../components/filters/Filters';
import ProductsList from '../../components/productsList/ProductsList';
import Spinner from '../../components/spinner/Spinner';

import { useGetCategoryInfoQuery } from "../../api/apiSlice";
import { useSelector } from "react-redux";

import './singleCategoryPage.css';

const SingleCategoryPage = () => {
    const {currentCategory} = useSelector(store => store.categories);

    const {
        data: response = {},
        isLoading,
        isError
    } = useGetCategoryInfoQuery(currentCategory);
    let productsList = [];
    let filtersList = [];

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h3>Error</h3>
    } else {
        productsList = response.items;
        filtersList = response.filters;
    }

    return (
        <>
            <h1>{currentCategory}</h1>
            <main className='single_category_main'>
                <Filters filtersList={filtersList}/>
                <ProductsList productsList={productsList} filtersList={filtersList}/>
            </main>
        </>
    );
};

export default SingleCategoryPage;