import {Link, Outlet} from "react-router-dom";

export default function HostingLayout() {

    return (
        <>
            <Link to="save">숙소 등록</Link>
            <Link to="list">숙소 수정</Link>
            <Link to="history">호스트 내역</Link>
            <Outlet/>
        </>
    )
}