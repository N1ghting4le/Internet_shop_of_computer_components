import CategoriesList from '../../components/categoriesList/CategoriesList';

import './mainPage.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllFilters } from '../../slices/filtersSlice';

const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(removeAllFilters());
    }, []);

    return (
        <>
            <h1>Internet shop of computer components</h1>
            <main className='main'>
                <CategoriesList/>
            </main>
        </>
    );
};

export default MainPage;