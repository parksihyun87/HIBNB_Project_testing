import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import '../index.css';

export default function MainLayout() {
    const isLogin = useSelector(state => state.userInfo.userLoginFlag);

    return (
        <header className="header">
            <h1 className="header__title">HI BNB</h1>
            <nav className="header__nav">
                <Link to="/" className="header__link">홈</Link>
                {isLogin ? (
                    <>
                        <Link to="/logout" className="header__link">로그아웃</Link>
                        <Link to="/mypage" className="header__link">내정보</Link>
                        <Link to="/hosting" className="header__link">호스팅</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="header__link">로그인</Link>
                        <Link to="/join" className="header__link">회원가입</Link>
                    </>
                )}
            </nav>
            <Outlet/>
        </header>
    );
}
