import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {addAccom} from "./store";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ModifyRoom() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.userInfo.userInfoList)

    const [formData, setFormData] = useState({
        hostid: user.username,
        hostname: user.name,
        address: user.address,
        detailaddr: user.detailaddr,
        description: user.description,
        type: user.type,
        bedrooms: user.bedrooms,
        beds: user.beds,
        bathrooms: user.bathrooms,
        maxcapacity: user.maxcapacity,
        pricePerNight: user.pricePerNight,
        images: user.imageUrls,
    });
    console.log(formData);

    // 폼 제출
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("hostid", formData.hostid);
        data.append("hostname", formData.hostname);
        data.append("address", formData.address);
        data.append("detailaddr", formData.detailaddr);
        data.append("description", formData.description);
        data.append("type", formData.type);
        data.append("bedrooms", formData.bedrooms);
        data.append("beds", formData.beds);
        data.append("bathrooms", formData.bathrooms);
        data.append("maxcapacity", formData.maxcapacity);
        data.append("pricePerNight", formData.pricePerNight);
        formData.images.forEach((image) => {
            data.append("images", image); // 다중 이미지 추가
        });

        try {
            const response = await axios.post("http://localhost:8080/accom/update", data, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            const accom = response.data;
            if (accom) {
                dispatch(addAccom(accom));
            }
            navigate("/");
            console.log("수정 완료: ", response.data);
        } catch (error) {
            console.error("오류: ", error);
        }
    };

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


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>주소: </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="주소 (예: 경기도, 서울특별시)"
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
                        type="text"
                        name="type"
                        placeholder="아파트, 펜션, 게스트하우스, 선택"
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
                        name="maxcapacity"
                        placeholder="최대 수용 인원"
                        value={formData.maxcapacity}
                        onChange={handleNumberChange}
                        min="1"
                        required
                    />
                </p>
                <p>
                    <label>1박당 가격: </label>
                    <input
                        type="number"
                        name="pricePerNight"
                        placeholder="1박당 가격"
                        value={formData.pricePerNight}
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
                <button type="submit">수정 등록</button>
            </form>
        </div>
    );

}