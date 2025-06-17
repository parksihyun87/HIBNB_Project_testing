import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import apiClient from "./util/apiInstance";
import {useState} from "react";
import dayjs from "dayjs";

export default function AccomDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const accomList = useSelector((state) => state.accom.list);
    const item = accomList.find((item) => item.id === Number(id));
    const searchParams = useSelector((state) => state.search.searchParams);
    const currentUser = useSelector((state) => state.userInfo.userInfoList[0]);

    const handleMove = async (e) => {
        e.preventDefault();
        const {checkindate, checkoutdate} = searchParams;
        const betweenDays=dayjs(checkoutdate).diff(dayjs(checkindate),"day");

        const bookDTO = {
            username: currentUser.username,
            accomid: item.id,
            checkindate: checkindate,
            checkoutdate: checkoutdate,
            totalPrice: betweenDays * item.pricePerNight,
        };

        const response= await apiClient.post("/book/save", bookDTO);
        console.log(response.data);
        console.log("확인")
        alert("예약이 완료 되었습니다.")
        navigate(`/payment/${item.id}`);
    };

    return (
        <div>
            <form>
                <h2>{item.hostid}의 {item.type}</h2>
                <div>
                    {item.imageUrls.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${item.address} 이미지 ${index + 1}`}
                        />
                    ))}
                </div>
                <p>가격: {item.pricePerNight.toLocaleString()}원</p>
                <p>침실: {item.bedrooms} | 침대: {item.beds} | 욕실: {item.bathrooms}</p>
                <p>설명: {item.description}</p>
                <p>주소: {item.address} {item.detailaddr}</p>
                <button onClick={handleMove}>예약하기</button>
            </form>
        </div>
    );
}