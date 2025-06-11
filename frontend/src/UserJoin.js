import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import apiClient from "./util/apiInstance"
import {addUserInfo} from "./store";

export default function UserJoin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: "USER@"+e.target.username.value,
            password: e.target.password.value,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            age: e.target.age.value,
        }
        try {
            const response = await apiClient.post("/join", data)
            dispatch(addUserInfo(data));
            alert("회원가입 성공")
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>회원가입</h2>
                <p>ID:
                    <input type="text" name="username" required/>
                </p>
                <p>PW:
                    <input type="text" name="password" required/>
                </p>
                <p>NAME:
                    <input type="text" name="name" required/>
                </p>
                <p>PHONE:
                    <input type="text" name="phone" required/>
                </p>
                <p>EMAIL:
                    <input type="text" name="email" required/>
                </p>
                <p>AGE:
                    <input type="number" name="age" required/>
                </p>
                <button type={"submit"}>저장</button>
                <button type={"button"} onClick={handleClose}>닫기</button>
            </form>
        </div>
    );
}
