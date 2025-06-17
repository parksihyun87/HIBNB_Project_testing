import {Link} from "react-router-dom";
import '../index.css';

export default function AdminMenu(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/admin/reports">신고 목록 조회</Link></li>
                    <li><Link to="/admin/accommodations">숙소 관리</Link></li>
                    <li><Link to="/logout">로그아웃</Link></li>
                </ul>
            </nav>
        </>
    );
}