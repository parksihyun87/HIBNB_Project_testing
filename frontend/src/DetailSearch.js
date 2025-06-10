import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function DetailSearch() {
    const navigate = useNavigate();

    const [isBoxOpen, setIsBoxOpen] = useState(false); // 여행지 추천 박스 열림 여부
    const [selectedFilter, setSelectedFilter] = useState({
        type: [],
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        max_capacity: 1,
        price_per_night: 0
    });


    return (
        <>
            <hr/>
            <button type={"button"}>필터</button>
            <hr/>

        </>
    );
}