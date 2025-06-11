import './App.css';
import {Route, Routes} from "react-router-dom";
import MyInfoLayout from "./MyInfoLayout";
import {MyInfo} from "./MyInfo";
import MyReserve from "./MyReserve";
import MyRoom from "./MyRoom";
import Quit from "./Quit";
import PaymentHome from "./PaymentHome";
import MainLayout from "./MainLayout";

import MainSearch from "./MainSearch";
import UserLogin from "./UserLogin";
import UserJoin from "./UserJoin";
import DetailSearch from "./DetailSearch";
import Hosting from "./Hosting";
import Logout from "./Logout";
import ReConfirmID from "./ReConfirmID";
import ReConfirmPW from "./ReConfirmPW";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/login" element={<UserLogin/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                    <Route path="/join" element={<UserJoin/>}></Route>
                    <Route path="/re-confirm-id" element={<ReConfirmID/>}></Route>
                    <Route path="/re-confirm-pw" element={<ReConfirmPW/>}></Route>
                    <Route path={"/"} element={<MainSearch/>}>
                        <Route path={"detail-search"} element={<DetailSearch/>}></Route>
                    </Route>
                    <Route path={"/detail/:id"}></Route>
                    <Route path={"/hosting"} element={<Hosting/>}></Route>
                    <Route path="/payment" element={<PaymentHome/>}/>
                    <Route path={"/mypage"} element={<MyInfoLayout/>}>
                        <Route path="profile" element={<MyInfo/>}></Route>
                        <Route path="reservations" element={<MyReserve/>}></Route>
                        <Route path="myroom" element={<MyRoom/>}></Route>
                        <Route path="quit" element={<Quit/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}


