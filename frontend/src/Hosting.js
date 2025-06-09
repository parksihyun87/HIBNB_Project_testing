import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Hosting() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        hostid: '',
        hostname: '',
        address: '',
        detailaddr: '',
        description: '',
        type: '',
        images: [],
        max_capacity: 0,
        price_per_night: 0,
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target; // 이벤트 객체에서 필요한 속성 추출
        setFormData((prev) => ({ // 이전 상태를 기반으로 새 상태 생성
            ...prev, // 기존 상태 복사
            [name]: files ? Array.from(files) : value, // files가 있으면 배열로 변환
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('hostid', formData.hostid);
        data.append('hostname', formData.hostname);
        data.append('address', formData.address);
        data.append('detailaddr', formData.detailaddr);
        data.append('description', formData.description);
        data.append('type', formData.type);
        formData.images.forEach((image, index) => {
            data.append(`images[${index}]`, image); // 여러 이미지 추가
        });
        data.append('max_capacity', formData.max_capacity);
        data.append('price_per_night', formData.price_per_night);
        // created_at은 서버에서 자동으로 설정되므로 클라이언트에서 전송할 필요 없음

        try {
            const response = await axios.post("http://localhost:8080/hosting", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            navigate("/success");
            console.log("성공: ", response.data);
        } catch (error) {
            console.log("오류: ", error);
        }
    };

    return (
        <div>
            <h2>숙박 정보 등록</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    호스트 ID: <input type="text" name="hostid" placeholder="호스트 ID (username)" onChange={handleChange}/>
                </p>
                <p>
                    호스트 이름: <input type="text" name="hostname" placeholder="호스트 이름" onChange={handleChange}/>
                </p>
                <p>
                    주소: <input type="text" name="address" placeholder="주소" onChange={handleChange}/>
                </p>
                <p>
                    상세주소: <input type="text" name="detailaddr" placeholder="상세 주소" onChange={handleChange}/>
                </p>
                <p>
                    설명: <textarea name="description" placeholder="설명" onChange={handleChange}/>
                </p>
                <p>
                    타입: <input type="text" name="type" placeholder="숙소 타입 (예: 호텔, 펜션)" onChange={handleChange}/>
                </p>
                <p>
                    가격: <input type="number" name="price_per_night" placeholder="1박당 가격" onChange={handleChange}/>
                </p>
                <p>
                    최대 수용 인원: <input type="number" name="max_capacity" placeholder="최대 수용 인원" onChange={handleChange}/>
                </p>
                <p>
                    사진: <input type="file" name="images" accept="image/*" multiple onChange={handleChange}/>
                </p>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}
