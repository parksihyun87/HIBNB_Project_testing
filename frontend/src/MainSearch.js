import {useNavigate} from "react-router-dom";

export default function MainSearch() {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate("/");
    };

    return (
        <div>
            <div>
                <p>
                    <select name={"travel"}>
                        <option value={"강릉"}>강릉</option>
                        <option value={"부산"}>부산</option>
                        <option value={"제주도"}>제주도</option>
                    </select>
                </p>
                <button onClick={closeModal}>검색</button>
            </div>
        </div>
    );
}
