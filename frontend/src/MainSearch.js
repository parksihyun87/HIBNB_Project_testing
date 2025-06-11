import React, {useState, useRef} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import "./App.css";
import apiClient from "./util/apiInstance";
import {useDispatch} from "react-redux";
import {setSearchParams, setSearchResults} from "./store";

export default function MainSearch() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isBoxOpen, setIsBoxOpen] = useState(false); // 여행지 추천 박스 열림 여부
    const [selectedDestination, setSelectedDestination] = useState(""); // 선택된 여행지
    const [searchQuery, setSearchQuery] = useState(""); // 여행지 검색어
    const [checkInDate, setCheckInDate] = useState(""); // 체크인 날짜
    const [checkOutDate, setCheckOutDate] = useState(""); // 체크아웃 날짜
    const [guests, setGuests] = useState(1); // 게스트 수

    const destinations = [
        "부산광역시",
        "제주도",
        "서울시",
        "인천시",
        "강원도",
        "대구시",
    ];

    // 외부 클릭 감지를 위한 ref
    const searchContainerRef = useRef();

    // 여행지 검색어 변경
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setIsBoxOpen(true);
    };

    // 여행지 선택
    const handleDestinationSelect = (destination) => {
        setSelectedDestination(destination);
        setSearchQuery(destination);
        setIsBoxOpen(false);
    };

    // 체크인, 체크아웃, 게스트 수 변경
    const handleCheckInChange = (e) => setCheckInDate(e.target.value);
    const handleCheckOutChange = (e) => setCheckOutDate(e.target.value);
    const handleGuestsChange = (e) => setGuests(Number(e.target.value));

    // 검색 버튼 클릭
    const handleSearch = async () => {
        if (!selectedDestination) {
            alert("여행지를 선택해주세요!");
            return;
        }
        const searchParams = {
            destination: selectedDestination,
            checkInDate,
            checkOutDate,
            guests,
        };

        // 검색 파라미터를 Redux store 저장
        dispatch(setSearchParams(searchParams));

        // try {
        //     const response = await apiClient.post("/", searchParams);
        //     dispatch(setSearchResults(response.data));
            navigate("/detail-search");
        // } catch (error) {
        //     console.error("검색 중 오류:", error);
        //     alert("검색 중 오류가 발생했습니다.");
        // }
    };

    // 검색창 외부 클릭 시 박스 닫기
    const handleClickOutside = (e) => {
        if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(e.target)
        ) {
            setIsBoxOpen(false);
        }
    };

    // 마운트 시 이벤트 리스너 등록, 언마운트 시 제거
    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // 검색어에 따라 여행지 필터링
    const filteredDestinations = destinations.filter((dest) =>
        dest.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="main-search" ref={searchContainerRef}>
                <div className="search-bar">
                    <div className="search-item">
                        <label>여행지</label>
                        <input
                            type="text"
                            placeholder="여행지 검색"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onFocus={() => setIsBoxOpen(true)}
                        />
                        {isBoxOpen && (
                            <div className="destination-box">
                                {filteredDestinations.length > 0 ? (
                                    filteredDestinations.map((destination, index) => (
                                        <div
                                            key={index}
                                            className="destination-item"
                                            onClick={() => handleDestinationSelect(destination)}
                                        >
                                            {destination}
                                        </div>
                                    ))
                                ) : (
                                    <div className="destination-item">검색 결과가 없습니다.</div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="search-item">
                        <label>체크인</label>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={handleCheckInChange}
                        />
                    </div>

                    <div className="search-item">
                        <label>체크아웃</label>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={handleCheckOutChange}
                        />
                    </div>

                    <div className="search-item">
                        <label>여행자</label>
                        <select value={guests} onChange={handleGuestsChange}>
                            {Array.from({length: 10}, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num}>
                                    {num}명
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="search-button" onClick={handleSearch}>
                        검색
                    </button>
                </div>
            </div>
            <Outlet/>
        </>
    );
}
