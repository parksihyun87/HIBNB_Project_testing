import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import DetailFilter from "./DetailFilter";
import './App.css';
import KakaoMap from "./kakaomapTest/KakakoMap";
import React from "react"; // 스타일 파일 불러오기

export default function DetailSearch() {
    const navigate = useNavigate();
    const accomList = useSelector((state) => state.accom.list);
    console.log(accomList);

    return (
        <div className="detail-search-container">
            <DetailFilter/>
            <div className="accom-list">
                {accomList.map((item) => (
                    <div
                        key={item.id}
                        className="accom-card"
                        onClick={() => navigate(`/accom/${item.id}`)}
                    >
                        <img
                            src={item.imageUrls[0]}
                            alt={item.address}
                        />
                        <div className="accom-card-content">
                            <h3>{item.address}의 {item.type}</h3>
                            <p>가격: {item.pricePerNight.toLocaleString()}원</p>
                            <p>침실: {item.bedrooms} | 침대: {item.beds} | 욕실: {item.bathrooms}</p>
                            <p>최대인원: {item.maxcapacity}명</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
