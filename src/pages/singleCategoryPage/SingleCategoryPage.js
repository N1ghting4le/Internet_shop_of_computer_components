import Filters from '../../components/filters/Filters';
import ProductsList from '../../components/productsList/ProductsList';
import Spinner from '../../components/spinner/Spinner';

import { useGetCategoryInfoQuery } from "../../api/apiSlice";

import './singleCategoryPage.css';

export const hideFilters = () => {
    document.querySelector('.filters_shadow').classList.remove('active');
    document.querySelector('.filters_shadow').classList.add('inactive');
    document.querySelector('.filters').classList.remove('active');
    document.querySelector('.filters').classList.add('inactive');
    document.body.style.overflow = '';
}

const SingleCategoryPage = () => {
    const currentCategoryId = window.localStorage.getItem('currentCategoryId');
    const currentCategory = window.localStorage.getItem('currentCategory');
    
    const {
        data: response = {},
        isLoading,
        isError
    } = useGetCategoryInfoQuery(currentCategoryId);
    let productsList = [];
    let filtersList = [];

    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h3>Error</h3>
    } else {
        productsList = response.record.items;
        filtersList = response.record.filters;
    }

    const showFilters = () => {
        document.querySelector('.filters_shadow').classList.remove('inactive');
        document.querySelector('.filters_shadow').classList.add('active');
        document.querySelector('.filters').classList.remove('inactive');
        document.querySelector('.filters').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    return (
        <>
            <h1>{currentCategory}</h1>
            <button className="filters_button" onClick={showFilters}>Filters</button>
            <main className='single_category_main'>
                <Filters filtersList={filtersList}/>
                <ProductsList productsList={productsList} filtersList={filtersList}/>
            </main>
            <div className="filters_shadow" onClick={hideFilters}></div>
        </>
    );
};

export default SingleCategoryPage;