import {useNavigate} from "react-router-dom";
import apiClient from "./util/apiInstance";
import {useState} from "react";

export default function ReConfirmPW() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        id: "",
        email: "",
        authennum: "",
    });

    const [isVerified, setIsVerified] = useState(false); // 인증 상태

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleAuth = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post("http://localhost:8080/verify-pw", {
                ...form,
            });

            if (response.data && response.data.verified) {
                alert("인증이 완료되었습니다. 이제 비밀번호를 재설정할 수 있습니다.");
                setIsVerified(true);
            } else {
                alert("인증 실패: 정보를 다시 확인해주세요.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 오류 발생. 잠시 후 다시 시도해주세요.");
        }
    };

    const resetPW = async (e) => {
        e.preventDefault();

        if (!isVerified) {
            alert("먼저 인증을 완료해주세요!");
            return;
        }

        const newPassword = prompt("새 비밀번호를 입력해주세요.");
        if (!newPassword) {
            alert("비밀번호가 입력되지 않았습니다.");
            return;
        }

        try {
            const response = await apiClient.put("http://localhost:8080/reset-pw", {
                id: form.id,
                newPassword: newPassword,
            });

            if (response.data && response.data.success) {
                alert("비밀번호 재설정을 완료하였습니다.");
                navigate("/login");
            } else {
                alert("비밀번호 재설정에 실패했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 오류 발생. 다시 시도해주세요.");
        }
    };

    return (
        <>
            <h2>비밀번호 찾기</h2>
            <form onSubmit={handleAuth}>
                <label>아이디를 입력해주세요.</label>
                <input
                    type="text"
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                /><br/>

                <label>이메일을 입력해주세요. 입력하신 이메일로 인증번호가 전송됩니다.</label>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                /><br/>

                <label>인증번호를 입력하세요.</label>
                <input
                    type="password"
                    name="authennum"
                    value={form.authennum}
                    onChange={handleChange}
                /><br/>

                <button type="submit">인증하기</button>
                <button onClick={resetPW} disabled={!isVerified}>
                    비밀번호 재설정
                </button>
            </form>
        </>
    );
}