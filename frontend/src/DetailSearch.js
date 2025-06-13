import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import DetailFilter from "./DetailFilter";
import {useEffect} from "react";

export default function DetailSearch() {
    const navigate = useNavigate();
    const accomList = useSelector((state) => state.accom.list);
    console.log(accomList);
    return (
        <div>
            <DetailFilter/>
            <div>
                {accomList.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => navigate(`/accom/${item.id}`)}
                    >
                        <img
                            src={item.imageUrls[0]}
                            alt={item.address}
                        />
                        <h3>{item.address}의 {item.type}</h3>
                        <p>가격: {item.pricePerNight.toLocaleString()}원</p>
                        <p>침실: {item.bedrooms} | 침대: {item.beds} | 욕실: {item.bathrooms}</p>
                        <p>최대인원: {item.maxcapacity}명</p>
                    </div>
                ))}
            </div>
        </div>
    );
}