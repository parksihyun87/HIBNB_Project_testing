import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function MainLayout() {
    const isLogin = useSelector(state => state.userInfo.userLoginFlag);

    return (
        <>
            <h1>HI BNB</h1>
            <Link to={"/"}>🎁</Link>
            {isLogin ? (
                <> <Link to={"/logout"}>로그아웃</Link></>
            ) : (
                <> <Link to={"/login"}>로그인</Link>
                    </>
            )}
            <Link to={"/hosting"}>호스팅</Link>
            <Outlet/>
        </>
    );
}
