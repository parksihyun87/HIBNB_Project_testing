
export default function Quit(){
        /*
        회원탈퇴
        나중에 다시 수정할 것
        * 대충 짜본 틀
        */
    const handleQuit = () => {
        if (window.confirm("탈퇴하시겠습니까?")) {
            alert("탈퇴 처리됨");
        }
    };
    return (
        <div>
            <p>정말 탈퇴하시겠습니까?</p>
            <button onClick={handleQuit}>회원탈퇴</button>
        </div>
    );
}
