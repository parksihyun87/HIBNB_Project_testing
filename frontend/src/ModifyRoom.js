import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {removeAccom, updateAccom} from "./store";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function ModifyRoom() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usernameAccom = useSelector(state => state.accom.list)
    const {id} = useParams();
    const item = usernameAccom.find((item) => item.id === Number(id));
    const [check, setCheck] = useState(false);

    const [formData, setFormData] = useState({
        hostid: usernameAccom.username,
        hostname: usernameAccom.name,
        address: "",
        detailaddr: "",
        description: "",
        type: "",
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        maxcapacity: 1,
        pricePerNight: 0,
        images: [],
    });

    useEffect(() => {
        if (item) {
            setFormData({
                hostid: item.username || "",
                hostname: item.name || "",
                address: item.address || "",
                detailaddr: item.detailaddr || "",
                description: item.description || "",
                type: item.type || "",
                bedrooms: item.bedrooms || 0,
                beds: item.beds || 0,
                bathrooms: item.bathrooms || 0,
                maxcapacity: item.maxcapacity || 1,
                pricePerNight: item.pricePerNight || 0,
                images: [],
            });
        }
    }, [item]);

    if (!item && usernameAccom.length > 0) {
        return <div>해당 숙소를 찾을 수 없습니다.</div>;
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
            const response = await axios.put("http://localhost:8080/accom/update", data, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            const updatedAccom = response.data;
            if (updatedAccom) {
                dispatch(updateAccom(updatedAccom));
                alert("숙소가 성공적으로 수정되었습니다.");
                navigate("/");
            }
        } catch (error) {
            console.error("오류:", error);
            alert("숙소 수정에 실패했습니다. 다시 시도해주세요.");
        }
    };

    // 입력 변경 처리
    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if (name === "images" && files) {
            setFormData((prev) => ({
                ...prev,
                [name]: [...prev.images, ...Array.from(files)], // 기존 이미지 유지 + 새 파일 추가
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // 숫자 입력 처리
    const handleNumberChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: Number(value) || 0, // 빈 값은 0으로 처리
        }));
    };

    const handleImageDeleteCheck = (e) => {
        setCheck(e.target.checked);
    };

    const handleImageAllDelete = () => {
        if (setCheck(true)) {
            dispatch(removeAccom.imageUrls);
        }
    }

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
                    <label>등록 된 사진:</label>
                    {item.imageUrls && item.imageUrls.length > 0 && (
                        <div>
                            <label>
                                <img
                                    src={item.imageUrls[0]}
                                    alt="기존 이미지"
                                    style={{width: "200px"}}
                                />
                                <input
                                    type="checkbox"
                                    name="imageDelete"
                                    checked={check}
                                    onChange={handleImageDeleteCheck}
                                />
                                삭제 선택
                            </label>
                            <button onClick={handleImageAllDelete}>선택 된 항목 삭제</button>
                        </div>
                    )}
                    <input
                        type="file"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleChange}
                    />
                </p>
                <button type="submit">수정 등록</button>
            </form>
        </div>
    );

}