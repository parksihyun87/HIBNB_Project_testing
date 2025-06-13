import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
//결제화면
export default function PaymentHome(){
    const navigate = useNavigate();
    const location = useLocation();
    const [reservation, setReservation] = useState(null);
    const [patmentCard, setPatmentCard] = useState("카드");

    useEffect(() => {
        if (location.state) {
            setReservation(location.state);
        } else {
            setReservation({
                accommodation: "경기 가평 펜션",
                checkIn: "2025-07-01",
                checkOut: "2025-07-03",
                guests: 2,
                price: "₩200,000",
            });
        }
    }, [location.state]);

    const handlePayment = () => {
        alert(`결제 수단: ${patmentCard}\n결제가 완료되었습니다!`);
        navigate("/mypage/reservations");
    };

    if (!reservation) return <p>예약 정보를 불러오는 중입니다...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>결제하기</h2>
            <p><strong>숙소:</strong> {reservation.accommodation}</p>
            <p><strong>체크인:</strong> {reservation.checkIn}</p>
            <p><strong>체크아웃:</strong> {reservation.checkOut}</p>
            <p><strong>인원:</strong> {reservation.guests}</p>
            <p><strong>총 금액:</strong> {reservation.price}</p>

            <label style={{ display: "block", marginTop: "20px", marginBottom: "10px" }}>
                <strong>결제수단:</strong>
                <select
                    value={patmentCard}
                    onChange={(e) => setPatmentCard(e.target.value)}
                    style={{marginLeft: "10px", paddingLeft: "5px"}}
                >
                   <option value={"카드"}>카드 결제</option>
                    <option value={"무통장"}>무통장 입금</option>
                    <option value={"간편결제"}>간편 결제(카카오페이 등)(장식용)</option>
                </select>
            </label>

            <button
                onClick={handlePayment}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#FF5A5F",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginTop: "20px",
                }}
            >
                결제하기
            </button>
        </div>
    );
}