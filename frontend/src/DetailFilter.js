import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetFilters, setFilters} from "./store";

export default function DetailFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.search.filters);

    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const typeOptions = ["아파트", "펜션", "주택"];
    const searchContainerRef = useRef();

    const handleClickOutside = (e) => {
        if (searchContainerRef.current &&
            !searchContainerRef.current.contains(e.target)
        ) {
            setIsBoxOpen(false);
        }
    };

    const handleFilterChange = (filterName, value) => {
        dispatch(setFilters({[filterName]: value}));
    };

    const handleApplyFilters = () => {
        console.log("적용된 필터:", filters);
        setIsBoxOpen(false);
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const searchResults = useSelector(state => state.search.searchResults);

    return (
        <>
            <hr/>
            <div>
                <button type={"button"} onClick={() => setIsBoxOpen(!isBoxOpen)}>필터</button>
                <hr/>
                {isBoxOpen && (
                    <div>
                        <div>
                            <h4>숙소 유형</h4>
                            {typeOptions.map(type => (
                                <label key={type}>
                                    <input
                                        type={"checkbox"}
                                        value={type}
                                        checked={filters.type === type}
                                        onChange={(e) => {
                                            const selectedType = e.target.value;
                                            const isCurrentlySelected = filters.type === selectedType;
                                            const updatedType = isCurrentlySelected ? "" : selectedType;

                                            handleFilterChange('type', updatedType);
                                        }}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        <div>
                            <h4>침실 방 개수</h4>
                            <input
                                type="number"
                                value={filters.bedrooms}
                                onChange={(e) => handleFilterChange('bedrooms', Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <h4>침대 개수</h4>
                            <input
                                type="number"
                                value={filters.beds}
                                onChange={(e) => handleFilterChange('beds', Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <h4>욕실 개수</h4>
                            <input
                                type="number"
                                value={filters.bathrooms}
                                onChange={(e) => handleFilterChange('bathrooms', Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <h4>최대 수용 인원</h4>
                            <input
                                type="number"
                                value={filters.max_capacity}
                                onChange={(e) => handleFilterChange('max_capacity', Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <button onClick={handleApplyFilters}>적용</button>
                            <button onClick={handleResetFilters}>초기화</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}