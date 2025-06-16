import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetFilters, setFilters, setAccom} from "../store";
import '../index.css';

export default function DetailFilter() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.search.filters);
    const searchResults = useSelector((state) => state.search.searchResults);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const typeOptions = ["아파트", "펜션", "오피스텔", "원룸", "게스트하우스", "빌라", "리조트"];

    const handleFilterChange = (filterName, value) => {
        if (filterName === "type") {
            dispatch(setFilters({type: value}));
        } else {
            dispatch(setFilters({[filterName]: Number(value)}));
        }
    };

    const handleApplyFilters = () => {
        if (searchResults) {
            const filtered = searchResults.filter((item) => {
                return (
                    (!filters.type || item.type === filters.type) &&
                    (!filters.bedrooms || item.bedrooms >= filters.bedrooms) &&
                    (!filters.beds || item.beds >= filters.beds) &&
                    (!filters.bathrooms || item.bathrooms >= filters.bathrooms) &&
                    (!filters.maxcapacity || item.maxcapacity >= filters.maxcapacity)
                );
            });
            dispatch(setAccom(filtered));
        }
        setIsBoxOpen(false);
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
        dispatch(setAccom(searchResults));
    };

    return (
        <>
            <hr/>
            <div className="detail-filter">
                <button type="button" onClick={() => setIsBoxOpen(!isBoxOpen)}>
                    필터
                </button>
                {isBoxOpen && (
                    <div>
                        <div className="filter-section">
                            <h4>숙소 유형</h4>
                            {typeOptions.map((type) => (
                                <label key={type}>
                                    <input
                                        type="checkbox"
                                        value={type}
                                        checked={filters.type === type}
                                        onChange={(e) => handleFilterChange("type", e.target.value)}
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                        <div className="filter-section">
                            <h4>침실 방 개수</h4>
                            <input
                                type="number"
                                value={filters.bedrooms}
                                min="0"
                                onChange={(e) => handleFilterChange("bedrooms", Number(e.target.value))}
                            />
                        </div>
                        <div className="filter-section">
                            <h4>침대 개수</h4>
                            <input
                                type="number"
                                value={filters.beds}
                                min="0"
                                onChange={(e) => handleFilterChange("beds", Number(e.target.value))}
                            />
                        </div>
                        <div className="filter-section">
                            <h4>욕실 개수</h4>
                            <input
                                type="number"
                                value={filters.bathrooms}
                                min="0"
                                onChange={(e) => handleFilterChange("bathrooms", Number(e.target.value))}
                            />
                        </div>
                        <div className="filter-section">
                            <h4>최대 수용 인원</h4>
                            <input
                                type="number"
                                value={filters.maxcapacity}
                                min="1"
                                onChange={(e) => handleFilterChange("maxcapacity", Number(e.target.value))}
                            />
                        </div>
                        <div className="filter-buttons">
                            <button onClick={handleApplyFilters}>적용</button>
                            <button onClick={handleResetFilters}>초기화</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}