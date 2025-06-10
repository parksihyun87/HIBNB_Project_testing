import {useLocation, useNavigate} from "react-router-dom";

export default function PaymentHome(){
    const navigate = useNavigate();
    const location = useLocation();
    const reservation = location.state;

    if(!reservation){
        return <p>예약 정보가 없습니다. 숙소를 선택하고 예약해주세요.</p>;
    }

    const handlePayment = () =>{
        alert("결제 완료!");
        navigate("/mypage/reservations");
    };

    return(
        <div>
            <h2>결제하기</h2>
            <p><strong>숙소:</strong> {reservation.accommodation}</p>
            <p><strong>체크인:</strong> {reservation.checkIn}</p>
            <p><strong>체크아웃:</strong> {reservation.checkOut}</p>
            <p><strong>인원:</strong> {reservation.guests}</p>
            <p><strong>총 금액:</strong> {reservation.price}</p>
            <button onClick={handlePayment}>결제하기</button>
        </div>
    )
}