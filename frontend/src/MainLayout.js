import {Link, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AdminReport from "./AdminReport";

export default function MainLayout() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userRole = useSelector(state => state.userInfo.userRole);
    console.log('current userRole state : ', userRole);

    return (
        <>
            <header>
                <h1>HI BNB</h1>
                <nav>
                    <Link to={"/"}>홈</Link>
                    {userRole === 'ROLE_ADMIN' ? (
                        <>
                            {/* 관리자 메뉴 */}
                            <Link to={"/admin/reports"}>신고 목록 조회</Link>
                            <Link to={"/admin/accommodations"}>숙소 관리</Link>
                            <Link to={"/logout"}>로그아웃</Link>
                        </>
                    ) : userRole === 'ROLE_USER' ? (
                        <>
                            {/* 일반 유저 메뉴 */}
                            <Link to={"/logout"}>로그아웃</Link>
                            <Link to={"/mypage"}>내정보</Link>
                            <Link to={"/hosting"}>호스팅</Link>
                        </>
                    ) : (
                        <>
                            {/* 비로그인 시 메뉴 */}
                            <Link to={"/login"}>로그인</Link>
                            <Link to={"/join"}>회원가입</Link>
                        </>
                    )}
                </nav>
            </header>
            <Outlet/>
        </>
    );
}
