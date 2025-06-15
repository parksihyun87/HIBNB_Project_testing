import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {kakaoClient} from "./util/kakaoInstatance";
import qs from "qs";

export default function PaymentHome(){
    const navigate = useNavigate();
    const location = useLocation();
    const [reservation, setReservation] = useState(null);

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

    const handlePayment = async () => {
        const data = {
            cid: "TC0ONETIME",
            partner_order_id: "order1234",
            partner_user_id: "user1234",
            item_name: "테스트 상품",
            quantity: 1,
            total_amount: 1000,
            tax_free_amount: 0,
            approval_url: "http://localhost:3000/payment/success",
            cancel_url: "http://localhost:3000/payment/cancel",
            fail_url: "http://localhost:3000/payment/fail",
        };

        try {
            const response = await kakaoClient.post(
                "/v1/payment/ready",
                qs.stringify(data)
            );

            const { tid, next_redirect_pc_url } = response.data;

            // ✅ 결제 승인 단계에서 사용할 TID 저장
            localStorage.setItem("kakao_tid", tid);
            localStorage.setItem("pendingReservation", JSON.stringify(reservation)); // 나중에 DB 저장용

            // ✅ 카카오 결제창으로 리디렉션
            window.location.href = next_redirect_pc_url;

        } catch (error) {
            console.error("카카오페이 요청 실패:", error);
            alert("결제 요청 중 오류가 발생했습니다.");
        }
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
            <Outlet></Outlet>
        </div>
    );
}

// const prev = JSON.parse(localStorage.getItem("reservations")) || [];
//
// const newReservation = {
//     id: Date.now(),
//     accommodation: reservation.accommodation,
//     reserverName: reservation.reserverName || "홍길동",
//     checkIn: reservation.checkIn,
//     checkOut: reservation.checkOut,
//     guests: reservation.guests,
//     status: "예약완료",
//     address: reservation.address || "주소 정보 없음",
//     description: reservation.description || "숙소 설명 없음",
//     price: reservation.price,
// };
//
// localStorage.setItem("reservations", JSON.stringify([...prev, newReservation]));
// alert("결제가 완료되었습니다!");
// navigate("/mypage/reservations");