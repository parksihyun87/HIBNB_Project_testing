import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 메인 검색 컴포넌트 정의
export default function MainSearch() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘 상태
    const [selectedDestination, setSelectedDestination] = useState(""); // 선택된 여행지 상태
    const [searchQuery, setSearchQuery] = useState(""); // 검색어 입력 상태
    const [checkInDate, setCheckInDate] = useState(""); // 체크인 날짜 상태
    const [checkOutDate, setCheckOutDate] = useState(""); // 체크아웃 날짜 상태
    const [guests, setGuests] = useState(1); // 게스트 수 상태 (기본값 1)
    const destinations = ["서울", "제주", "부산", "인천", "대구"]; // 여행지 목록
    const recentSearches = ["제주", "서울"]; // 최근 검색어 (임시 데이터)

    // 모달 열기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    // 여행지 선택 함수
    const handleDestinationSelect = (destination) => {
        setSelectedDestination(destination);
        setIsModalOpen(false);
    };

    // 검색어 변경 시 호출되는 함수
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // 입력된 검색어 업데이트
    };

    // 체크인 날짜 변경 시 호출되는 함수
    const handleCheckInChange = (e) => {
        setCheckInDate(e.target.value); // 체크인 날짜 업데이트
    };

    // 체크아웃 날짜 변경 시 호출되는 함수
    const handleCheckOutChange = (e) => {
        setCheckOutDate(e.target.value); // 체크아웃 날짜 업데이트
    };

    // 게스트 수 변경 시 호출되는 함수
    const handleGuestsChange = (e) => {
        setGuests(parseInt(e.target.value, 10)); // 게스트 수 업데이트 (숫자로 변환)
    };

    // 검색 버튼 클릭 시 호출되는 함수
    const handleSearch = () => {
        if (selectedDestination) {
            console.log("선택된 여행지:", selectedDestination);
            console.log("체크인:", checkInDate);
            console.log("체크아웃:", checkOutDate);
            console.log("게스트 수:", guests); // 검색 조건 콘솔 출력
        }
        closeModal(); // 모달 닫기
    };

    // 검색어에 맞는 여행지 필터링
    const filteredDestinations = destinations.filter((dest) =>
        dest.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-container">
            <form className="search-form">
                <div className="search-input">
                    <input
                        type="text"
                        name="travel"
                        placeholder="여행지"
                        value={selectedDestination}
                        onClick={openModal}
                        onChange={handleSearchChange} // 검색어 입력 가능
                    />
                </div>
                <div className="search-input">
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={handleCheckInChange} // 체크인 날짜 선택
                    />
                </div>
                <div className="search-input">
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={handleCheckOutChange} // 체크아웃 날짜 선택
                    />
                </div>
                <div className="search-input">
                    <select value={guests} onChange={handleGuestsChange}>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num}>
                                {num} 명
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleSearch}>
                    검색
                </button>
            </form>
            {isModalOpen && (
                <div className="modal2" onClick={closeModal}>
                    <div className="modal-search" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              ×
            </span>
                        <h2>여행지 선택</h2>
                        {/* 최근 검색어 섹션 */}
                        <div>
                            <h3>최근 검색어</h3>
                            <ul>
                                {recentSearches.map((search, index) => (
                                    <li key={index} onClick={() => handleDestinationSelect(search)}>
                                        {search}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* 필터링된 여행지 목록 */}
                        <div>
                            <h3>추천 여행지</h3>
                            <ul>
                                {filteredDestinations.length > 0 ? (
                                    filteredDestinations.map((dest, index) => (
                                        <li key={index} onClick={() => handleDestinationSelect(dest)}>
                                            {dest}
                                        </li>
                                    ))
                                ) : (
                                    <li>일치하는 여행지가 없습니다.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}