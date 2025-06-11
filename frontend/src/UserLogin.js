import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setToken, setUserInfoList, userLogin} from "./store";
import apiClient from "./util/apiInstance";
import {useRef} from "react";

export default function UserLogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            username: "USER@" + e.target.username.value,
            password: e.target.password.value
        }
        try {
            const response = await apiClient.post("/login",
                new URLSearchParams(data));
            // console.log(response.headers['authorization']);
            // console.log(response.data);
            //
            dispatch(setToken(response.headers['authorization']));
            dispatch(setUserInfoList(response.data));
            dispatch(userLogin());
            alert("로그인 성공!")
            navigate("/");

        } catch (error) {
            alert("로그인에 실패했습니다.");
            console.log(error);
        }
    };

    const handleReConfirm=()=>{
        navigate("/re-confirm-id")
    }

    const handleReConfirmPW=()=>{
        navigate("/re-confirm-pw")
    }

    const handleJoin = () => {
        navigate("/join");
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>로그인</h2>
                <p> ID:
                    <input type="text" name={"username"}/>
                </p>
                <p> PW:
                    <input type="password" name={"password"}/>
                </p>
                <button type={"submit"}>로그인</button><br/>
            </form>
            <button onClick={handleReConfirm}>아이디 찾기</button>
            <button onClick={handleReConfirmPW}>비밀번호 재설정</button>
            <button onClick={handleJoin}>회원가입</button>
        </div>
    );
}
