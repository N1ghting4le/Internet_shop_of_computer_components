import SingleProduct from '../../components/singleProduct/SingleProduct';
import Characteristics from '../../components/characteristics/Characteristics';

import './singleItemPage.css';

const SingleItemPage = () => {
    return (
        <main className='single_item_page_main'>
            <SingleProduct/>
            <Characteristics/>
        </main>
    );
};

export default SingleItemPage;