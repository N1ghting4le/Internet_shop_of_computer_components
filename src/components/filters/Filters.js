import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

import { addActiveFilter, removeActiveFilter, removeAllFilters } from "../../slices/filtersSlice";

const Filters = ({filtersList}) => {
    const {activeFilters} = useSelector(state => state.filters);

    const dispatch = useDispatch();

    const itemRefs = useRef([]);

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
        itemRefs.current.forEach(item => {
            activeFilters.forEach(filter => {
                if (item.value === filter.value) {
                    item.checked = true;
                }
            })
        });
    }

    const resetAllFilters = () => {
        dispatch(removeAllFilters());
        itemRefs.current.forEach(item => {
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
                        {item.values.map(item => <span key={item}><input type="checkbox" ref={el => itemRefs.current[itemRefs.current.length] = el} data-name={name} value={item} onChange={onCheckboxToggle}></input> {item}</span>)}
                    </div>
                </div>
            );
        });
    }

    const elements = renderFiltersList();

    return (
        <div className="filters">
            <h2>Filters</h2>
            {elements}
            <button className="reset_all" onClick={resetAllFilters}>reset all filters</button>
        </div>
    );
};

export default Filters;