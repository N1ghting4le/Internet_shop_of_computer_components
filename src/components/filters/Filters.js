import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { addActiveFilter, removeActiveFilter, removeAllFilters } from "../../slices/filtersSlice";
import { hideFilters } from "../../pages/singleCategoryPage/SingleCategoryPage";

const Filters = ({filtersList}) => {
    const {activeFilters} = useSelector(state => state.filters);

    const dispatch = useDispatch();

    useEffect(() => {
        onActiveFiltersCheck();
    }, []);

    const onCheckboxToggle = (e) => {
        if (e.target.checked) {
            dispatch(addActiveFilter({name: e.target.getAttribute('data-name'), value: e.target.value}));
        } else {
            dispatch(removeActiveFilter(e.target.value));
        }
    }

    const onActiveFiltersCheck = () => {
        document.querySelectorAll('input').forEach(item => {
            activeFilters.forEach(filter => {
                if (item.value === filter.value) {
                    item.checked = true;
                }
            })
        });
    }

    const onKeyDown = (e) => {
        if (e.code === 'Enter') {
            e.target.checked = !e.target.checked;
            onCheckboxToggle(e);
        }
    }

    const resetAllFilters = () => {
        dispatch(removeAllFilters());
        document.querySelectorAll('input').forEach(item => {
            if (item) {
                item.checked = false;
            }
        });
    }

    const renderFiltersList = () => {
        return filtersList.map(item => {
            let name = item.name

            return (
                <div key={item.id}>
                    <h3>{item.name}:</h3>
                    <div className="checkboxes">
                        {item.values.map(item => <label key={item}><input type="checkbox" data-name={name} value={item} onChange={onCheckboxToggle} onKeyDown={onKeyDown}></input> {item}</label>)}
                    </div>
                </div>
            );
        });
    }

    const elements = renderFiltersList();

    return (
        <div className="filters">
            <h2>Filters</h2>
            <button className="close" onClick={hideFilters}></button>
            {elements}
            <button className="reset_all" onClick={resetAllFilters}>reset all filters</button>
        </div>
    );
};

export default Filters;