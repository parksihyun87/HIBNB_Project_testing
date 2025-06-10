import React, { useState } from "react";

    /*
    * css 나중에 따로 뺄거에용
    * */
export default function MyReserve() {
    const [reservations, setReservations] = useState([
        {
            id: 1,
            accommodation: "경기 가평군 캠핑장",
            reserverName: "최장박",
            checkIn: "2025-06-20",
            checkOut: "2025-07-20",
            guests: 2,
            status: "예약완료",
            address: "경기도 가평군 123-45",
            description:
                "숲 속에 위치한 자연 친화적인 캠핑장으로 바비큐 시설과 편의시설 완비",
        },
        {
            id: 2,
            accommodation: "부산 해운대 바다뷰 숙소",
            reserverName: "이영희",
            checkIn: "2025-07-01",
            checkOut: "2025-07-03",
            guests: 1,
            status: "예약취소됨",
            address: "부산 해운대구 우동 678-90",
            description: "바다 바로 앞 위치, 해운대 해수욕장 도보 1분 거리",
        },
        {
            id: 3,
            accommodation: "제주 한달살기 민박집",
            reserverName: "최장박",
            checkIn: "2025-08-10",
            checkOut: "2025-09-10",
            guests: 1,
            status: "예약완료",
            address: "제주도 서귀포시 111-22",
            description: "조용한 마을 속 아늑한 민박, 편안한 숙소 제공",
        },
    ]);

    const [selectedReservationId, setSelectedReservationId] = useState(null);

    const toggleDetails = (id) => {
        if (selectedReservationId === id) {
            setSelectedReservationId(null);
        } else {
            setSelectedReservationId(id);
        }
    };

    const cancelReservation = (id) => {
        setReservations((prev) =>
            prev.map((res) =>
                res.id === id ? { ...res, status: "예약취소됨" } : res
            )
        );
        if (selectedReservationId === id) {
            setSelectedReservationId(null);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>예약 정보</h2>

            {reservations.length === 0 ? (
                <p style={{ textAlign: "center" }}>예약 내역이 없습니다.</p>
            ) : (
                reservations.map((res) => (
                    <div
                        key={res.id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "20px",
                            marginBottom: "20px",
                            boxShadow:
                                selectedReservationId === res.id
                                    ? "0 4px 15px rgba(255, 90, 95, 0.3)"
                                    : "0 1px 6px rgba(0,0,0,0.1)",
                            transition: "box-shadow 0.3s ease",
                        }}
                    >
                        <h3 style={{ marginBottom: "8px", color: "#FF5A5F" }}>
                            {res.accommodation}
                        </h3>
                        <p style={{ margin: "4px 0", color: "#555" }}>
                            예약자: {res.reserverName}
                        </p>
                        <p style={{ margin: "4px 0", color: "#555" }}>
                            체크인: {res.checkIn} / 체크아웃: {res.checkOut}
                        </p>
                        <p style={{ margin: "4px 0", color: "#555" }}>인원: {res.guests}명</p>
                        <p
                            style={{
                                margin: "8px 0",
                                fontWeight: "bold",
                                color: res.status === "예약완료" ? "green" : "gray",
                            }}
                        >
                            상태: {res.status}
                        </p>

                        <div style={{ marginTop: "10px" }}>
                            <button
                                onClick={() => toggleDetails(res.id)}
                                style={{
                                    padding: "10px 16px",
                                    backgroundColor: "#FF5A5F",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                    marginRight: "10px",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#e04f54")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.backgroundColor = "#FF5A5F")
                                }
                            >
                                {selectedReservationId === res.id ? "상세 닫기" : "상세 보기"}
                            </button>

                            {res.status === "예약완료" && (
                                <button
                                    onClick={() => cancelReservation(res.id)}
                                    style={{
                                        padding: "10px 16px",
                                        backgroundColor: "#ff6b6b",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "600",
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#e55a5a")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#ff6b6b")
                                    }
                                >
                                    예약 취소
                                </button>
                            )}
                        </div>

                        {/* 상세보기 영역 */}
                        {selectedReservationId === res.id && (
                            <div
                                style={{
                                    marginTop: "20px",
                                    padding: "15px",
                                    backgroundColor: "#fff",
                                    borderRadius: "10px",
                                    border: "1px solid #eee",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                    color: "#333",
                                }}
                            >
                                <p style={{ margin: "6px 0" }}>
                                    <strong>주소:</strong> {res.address}
                                </p>
                                <p style={{ margin: "6px 0" }}>
                                    <strong>숙소 설명:</strong> {res.description}
                                </p>
                                <p style={{ margin: "6px 0" }}>
                                    <strong>예약 기간:</strong> {res.checkIn} ~ {res.checkOut}
                                </p>
                                <p style={{ margin: "6px 0" }}>
                                    <strong>인원:</strong> {res.guests}명
                                </p>
                                <p style={{ margin: "6px 0", color: "#666", fontSize: "14px" }}>
                                    * 예약 상태가 ‘예약완료’인 경우에만 예약 취소가 가능합니다.
                                </p>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
