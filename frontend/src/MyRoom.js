import {useEffect, useState} from "react";
import "./MyRoom.css"
import axios from "axios";
import dayjs from "dayjs";
import {useSelector} from "react-redux";
import apiClient from "./util/apiInstance";

export default function MyRoom(){
        /*
        * 이용내역
        * 대충 짜본 틀
        * css는 나중에 뺄꺼에용
        */
    const [showModal, setShowModal] = useState(false);
    const [history, setHistory] = useState([]);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const currentUser = useSelector((state) => state.userInfo.currentUser);

    useEffect(() => {
        const fetchHistory = async () => {
            try{
                const response = await apiClient.get("/book/list", {
                    params: { username: currentUser.username },
                });

                const now = dayjs();
                const pastReservations = response.data
                    .filter((item) => dayjs(item.checkOut).isBefore(now))
                    .sort((a, b) => dayjs(b.checkOut).diff(a.checkOut));

                const formatted = pastReservations.map((item, index) => ({
                    id: item.id,
                    place: item.accomid,
                    date: `${item.checkIn} ~ ${item.checkOut}`,
                    isMostRecent: index === 0,
                }));

                setHistory(formatted);
            }catch(error){
                console.error("이용 내역 불러오기 실패: ", error);
            }
        }
        fetchHistory();
    },[]);




    return (
        <div className="room-container">
            <h2 className="room-title">이용 내역</h2>

            {history.length === 0 ? (
                <p className="room-empty">이용 내역이 없습니다.</p>
            ) : (
                <ul className="room-list">
                    {history.map((item) => (
                        <li key={item.id} className="room-card">
                            <div>
                                <div className="room-place">{item.place}</div>
                                <div className="room-date">{item.date}</div>
                            </div>
                            {item.isMostRecent && (
                                <button className="room-review-btn" onClick={() => setShowModal(true)}>
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
                        <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                            ×
                        </button>
                        <h3 className="modal-title">리뷰 작성</h3>
                        <textarea
                            className="modal-textarea"
                            placeholder="숙소는 어땠나요? 호스트는 친절했나요?"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <div className="modal-footer">
                            <button className="modal-submit-btn" onClick={() => setShowModal(false)}>
                                제출
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}