import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MyInfo.css";
import axios from "axios";

export default function MyInfo() {
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const currentUser = useSelector(state => state.userInfo.currentUser);

    useEffect(() => {
        if (currentUser) {
            setEmail(currentUser.email || "");
            setPhone(currentUser.phone || "");
        }
    }, [currentUser]);

    const handleSubmit = async (e) => {
        try{
            const response = await axios.put("/")
        }catch (error) {
            console.log(error);
        }

        e.preventDefault();
        alert(`수정된 정보:\n이메일: ${email}\n전화번호: ${phone}`);
    };

    return (
        <div className="myinfo-container">
            <form className="myinfo-form" onSubmit={handleSubmit}>
                <h2 className="myinfo-title">내 정보 확인</h2>

                <p className="myinfo-text">
                    <strong>이름:</strong> {currentUser?.name || "이름 없음"}
                </p>

                <label className="myinfo-label">
                    <strong>전화번호</strong><br />
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="myinfo-input"
                    />
                </label>

                <label className="myinfo-label">
                    <strong>이메일</strong><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="myinfo-input"
                    />
                </label>

                <button type="submit" className="myinfo-button">
                    정보 수정
                </button>
            </form>
        </div>
    );
}

