// src/pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import {kakaoClient} from "../util/kakaoInstatance";

export default function PaymentSuccess() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const pg_token = new URLSearchParams(location.search).get("pg_token");
        const tid = localStorage.getItem("kakao_tid");

        if (!pg_token) {
            alert("pg_token이 없습니다!");
            navigate("/payment/fail");
            return;
        }

        if (!tid) {
            alert("tid(kakao_tid)가 localStorage에 없습니다!");
            navigate("/payment/fail");
            return;
        }

        const approvePayment = async () => {
            try {
                const cid = "TC0ONETIME";
                // 카카오 API는 application/x-www-form-urlencoded 형식의 body를 요구하므로 qs.stringify로 변환
                const data = qs.stringify({ cid, tid, pg_token,partner_order_id: "order1234",
                    partner_user_id: "user1234"});

                const response = await kakaoClient.post("/v1/payment/approve", data);

                alert("결제가 승인되었습니다!");
                navigate("/mypage/reservations");
            } catch (error) {
                console.error("결제 승인 실패:", error);
                alert("결제 승인 중 오류가 발생했습니다.");
                navigate("/payment/fail");
            }
        };

        if (pg_token && tid) {
            approvePayment();
        }
    }, [location.search, navigate]);

    return <p>결제를 승인 중입니다. 잠시만 기다려주세요...</p>;
}
