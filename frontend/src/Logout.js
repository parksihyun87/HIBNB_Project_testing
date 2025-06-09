
export default function Logout(){
        /*
        로그아웃
        * 대충 짜본 틀
        */
    const handleLogout = () => {
        alert("로그아웃 되었습니다.");
    };

    return (
        <div>
            <h2>로그아웃</h2>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}