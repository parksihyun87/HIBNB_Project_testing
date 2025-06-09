import {useNavigate} from "react-router-dom";

export default function MainSearch() {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate("/");
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <p>
                    <input></input>
                </p>
                <button onClick={closeModal}>저장</button>
                <button onClick={closeModal}>닫기</button>
            </div>
        </div>
    );
}
