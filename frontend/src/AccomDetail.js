import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import KakaoMap from "./kakaomapTest/KakakoMap";
import React from "react";

export default function AccomDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const accomList = useSelector((state) => state.accom.list);
    const item = accomList.find((item) => item.id === Number(id));

    const handleMove = () => {
        navigate("/payment");
    };
    console.log("경도,위도",item.latitude,item.latitude)

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
                <KakaoMap latitude={item.latitude} longitude={item.longitude} />
                <button onClick={handleMove}>예약하기</button>
            </form>
        </div>
    );
}