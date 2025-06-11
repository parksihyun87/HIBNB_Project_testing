import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function DetailSearch() {
    const {hostid} = useParams(); // URL에서 id 추출
    const accomList = useSelector((state) => state.accom.list);
    const item = accomList.find((item) => item.hostid === hostid);

    if (!item) {
        return <p>숙소 정보를 찾을 수 없습니다</p>;
    }

    return (
        <div>
            <>

                <h2>{item.address + "의" + item.type}</h2>
                <img src={item.images} style={{width: "200px"}} alt={item.address}/>
                <p>가격: {item.price_per_night}원</p>
            </>

        </div>
    );
}