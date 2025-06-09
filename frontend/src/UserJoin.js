import {useNavigate} from "react-router-dom";

export default function UserJoin() {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate("/");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>회원가입</h2>
                <p>
                    ID: <input type="text"/>
                </p>
                <p>
                    PW: <input type="text"/>
                </p>
                <button onClick={closeModal}>저장</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
}
