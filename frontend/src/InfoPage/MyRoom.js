import { useEffect, useState } from "react";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useSelector } from "react-redux";
import apiClient from "../util/apiInstance";

dayjs.extend(isSameOrBefore);

export default function MyRoom() {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const currentUser = useSelector((state) => state.userInfo.userInfoList[0]);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const fetchHistory = async () => {
            if (!currentUser?.username) {
                setError("로그인이 필요합니다.");
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const response = await apiClient.get("/book/list", {
                    params: { username: currentUser.username },
                });

                const pastReservations = response.data.filter(
                    (item) => item.status === "이용완료"
                );

                const formattedHistory = pastReservations.map((item, index) => ({
                    id: item.id,
                    place: item.accom?.address || `숙소 ID ${item.accomid}`,
                    date: `${item.checkindate} ~ ${item.checkoutdate}`,
                    isMostRecent: index === 0,
                    accomid: item.accomid,
                }));

                setHistory(formattedHistory);
            } catch (error) {
                console.error("❌ 이용 내역 불러오기 실패: ", error);
                setError("이용 내역을 불러오는 데 실패했습니다. 다시 시도해주세요.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchHistory();
    }, [currentUser?.username]);

    const handleReviewSubmit = async () => {
        if (!reviewText.trim()) {
            alert("리뷰 내용을 입력해주세요.");
            return;
        }

        try {
            const mostRecentBooking = history.find((item) => item.isMostRecent);
            if (!mostRecentBooking) {
                throw new Error("예약 정보를 찾을 수 없습니다.");
            }

            const now = new Date().toISOString();

            await apiClient.post("/review/save",  {
                bookid: mostRecentBooking.id,
                accomid: mostRecentBooking.accomid,
                username: currentUser.username,
                comment: reviewText,
                rating: rating, // Default rating, can be enhanced with a rating input
                createdAt: now,
            });

            alert("리뷰가 성공적으로 제출되었습니다!");
            setReviewText("");
            setShowModal(false);
        } catch (error) {
            console.error("❌ 리뷰 제출 실패: ", error);
            alert("리뷰 제출에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <div className="room-container">
            <h2 className="room-title">이용 내역</h2>

            {isLoading && <p className="room-loading">로딩 중...</p>}
            {error && <p className="room-error">{error}</p>}

            {!isLoading && !error && history.length === 0 && (
                <p className="room-empty">이용 내역이 없습니다.</p>
            )}

            {!isLoading && !error && history.length > 0 && (
                <ul className="room-list">
                    {history.map((item) => (
                        <li key={item.id} className="room-card">
                            <div>
                                <div className="room-place">예약자: {currentUser.username}</div>
                                <div className="room-place">{item.place}</div>
                                <div className="room-date">{item.date}</div>
                            </div>
                            {item.isMostRecent && (
                                <button
                                    className="room-review-btn"
                                    onClick={() => setShowModal(true)}
                                >
                                    리뷰 쓰기
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>
                        <h3 className="modal-title">리뷰 작성</h3>
                        <select onChange={(e) => setRating(e.target.value)}>
                            <option value={"1"}>⭐</option>
                            <option value={"2"}>⭐⭐</option>
                            <option value={"3"}>⭐⭐⭐</option>
                            <option value={"4"}>⭐⭐⭐⭐</option>
                            <option value={"5"}>⭐⭐⭐⭐⭐</option>
                        </select>
                        <textarea
                            className="modal-textarea"
                            placeholder="숙소는 어땠나요? 호스트는 친절했나요?"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <div className="modal-footer">
                            <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>
                                취소
                            </button>
                            <button className="modal-submit-btn" onClick={handleReviewSubmit}>
                                제출
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}