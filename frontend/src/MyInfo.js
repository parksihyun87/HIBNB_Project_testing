import {useState} from "react";

export default function MyInfo(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("제출된 정보:", {
            name,
            phone,
        });

        alert("정보가 수정되었습니다.");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>내 정보 확인</h2>

            <div>
                <label>이름: </label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>휴대폰 번호: </label>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            <button type="submit">정보 수정</button>
        </form>
    );
}