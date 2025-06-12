import {useNavigate} from "react-router-dom";
import apiClient from "./util/apiInstance";
import {useState} from "react";

export default function ReConfirmID(){
    const navigate=useNavigate();

    const [email, setEmail] = useState("");
    const [authenNum, setAuthenNum] = useState("");

    const successAuthen=async (e)=>{
        e.preventDefault();
        try {
            const response = await apiClient.post("http://localhost:8080/re-confirm-id", {
                email,
                authenNum,
            });

            // 서버에서 받은 아이디 출력
            if (response.data && response.data.userId) {
                alert(`당신의 아이디는 "${response.data.userId}" 입니다.`);
                navigate("/login");
            } else {
                alert("인증번호가 일치하지 않거나 정보가 올바르지 않습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
    }

    return(
        <>
            <h2>아이디 찾기</h2>
            <form onSubmit={successAuthen}>

                <label>이메일을 입력해주세요. 입력하신 이메일로 인증번호가 전송됩니다.</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <label>인증번호를 입력해주세요.</label>
                <input
                    type="password"
                    name="authennum"
                    value={authenNum}
                    onChange={(e) => setAuthenNum(e.target.value)}
                /><br/>

                <button type="submit">인증하기</button>
            </form>
        </>
    );
}