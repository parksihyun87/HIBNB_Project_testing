import {useState} from "react";
import "./Quit.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Quit(){
        /*
        회원탈퇴
        나중에 다시 수정할 것
        * 대충 짜본 틀
        */
    const [showConfirm, setShowConfirm] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentUser = useSelector((state) => state.userInfo.currentUser);
    const token = useSelector((state) => state.token.token);

    const handleQuit = async () => {
        try{
            // const response = await axios.delete("" + currentUser.id);

        }catch (error){
            console.log("회원탈퇴 에러: ", error);
            alert("회원 탈퇴 중 문제가 발생했습니다.");
        }

        alert("🙇‍♂️그동안 이용해주셔서 감사합니다.🙇‍♂️");
        setShowConfirm(false);

    };

    return (
        <div className="quit-container">
            <div className="quit-card">
                {!showConfirm ? (
                    <>
                        <p className="quit-message">정말 탈퇴하시겠습니까?</p>
                        <button className="quit-button-danger" onClick={() => setShowConfirm(true)}>
                            회원탈퇴
                        </button>
                    </>
                ) : (
                    <>
                        <p className="quit-message">
                            정말로 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다. 신중히 선택하세요.
                        </p>
                        <button className="quit-button-danger" onClick={handleQuit}>
                            탈퇴 확인
                        </button>
                        <button className="quit-button-cancel" onClick={() => setShowConfirm(false)}>
                            취소
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
