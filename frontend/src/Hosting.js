import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken} from "./store";

export default function Hosting() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        hostid: "",
        hostname: "",
        address: "",
        detailaddr: "",
        description: "",
        type: "",
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        max_capacity: 1,
        price_per_night: 0,
        images: [],
    });

    // 입력 변경 처리
    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? Array.from(files) : value,
        }));
    };

    // 숫자 입력 처리
    const handleNumberChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: Number(value) || 0, // 빈 값은 0으로 처리
        }));
    };

    const handleClose = () => {
        navigate("/");
    }

    // 폼 제출
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("hostid", formData.hostid);
        data.append("hostname", formData.hostname);
        data.append("address", formData.address);
        data.append("detailaddr", formData.detailaddr);
        data.append("description", formData.description);
        data.append("type", formData.type); // 배열을 JSON 문자열로
        data.append("bedrooms", formData.bedrooms);
        data.append("beds", formData.beds);
        data.append("bathrooms", formData.bathrooms);
        data.append("max_capacity", formData.max_capacity);
        data.append("price_per_night", formData.price_per_night);
        formData.images.forEach((image) => {
            data.append("images", image); // 다중 이미지 추가
        });

        try {
            const response = await axios.post("http://localhost:8080/hosting", data, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            dispatch(setToken())
            navigate("/");
            console.log("등록 완료: ", response.data);
        } catch (error) {
            console.error("오류: ", error);
        }
    };

    return (
        <div>
            <h2>숙박 정보 등록</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>호스트 ID: </label>
                    <input
                        type="text"
                        name="hostid"
                        placeholder="호스트 ID (username)"
                        value={formData.hostid}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>호스트 이름: </label>
                    <input
                        type="text"
                        name="hostname"
                        placeholder="호스트 이름"
                        value={formData.hostname}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>주소: </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="주소 (예: 서울시, 경기도)"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>상세주소: </label>
                    <input
                        type="text"
                        name="detailaddr"
                        placeholder="상세 주소"
                        value={formData.detailaddr}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>설명: </label>
                    <textarea
                        name="description"
                        placeholder="숙소 설명"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>숙소 유형: </label>
                    <input
                        type="type"
                        placeholder="숙소 유형"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </p>
                <p>
                    <label>침실 수: </label>
                    <input
                        type="number"
                        name="bedrooms"
                        placeholder="침실 개수"
                        value={formData.bedrooms}
                        onChange={handleNumberChange}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <label>침대 수: </label>
                    <input
                        type="number"
                        name="beds"
                        placeholder="침대 개수"
                        value={formData.beds}
                        onChange={handleNumberChange}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <label>욕실 수: </label>
                    <input
                        type="number"
                        name="bathrooms"
                        placeholder="욕실 개수"
                        value={formData.bathrooms}
                        onChange={handleNumberChange}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <label>최대 수용 인원: </label>
                    <input
                        type="number"
                        name="max_capacity"
                        placeholder="최대 수용 인원"
                        value={formData.max_capacity}
                        onChange={handleNumberChange}
                        min="1"
                        required
                    />
                </p>
                <p>
                    <label>1박당 가격: </label>
                    <input
                        type="number"
                        name="price_per_night"
                        placeholder="1박당 가격"
                        value={formData.price_per_night}
                        onChange={handleNumberChange}
                        min="0"
                        required
                    />
                </p>
                <p>
                    <label>사진: </label>
                    <input
                        type="file"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                        required
                    />
                </p>
                <button type="submit">등록</button>
                <button type={"button"} onClick={handleClose}>취소</button>
            </form>
        </div>
    );
}