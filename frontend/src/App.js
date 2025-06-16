import './index.css';
import {Route, Routes} from "react-router-dom";
import {MyInfo} from "./InfoPage/MyInfo";
import MyReserve from "./InfoPage/MyReserve";
import MyRoom from "./InfoPage/MyRoom";
import PaymentHome from "./AccomPage/PaymentHome";
import AccomDetail from "./AccomPage/AccomDetail";
import MainLayout from "./LayoutPage/MainLayout";
import MyInfoLayout from "./LayoutPage/MyInfoLayout";
import HostingLayout from "./LayoutPage/HostingLayout";
import UserLogin from "./UserPage/UserLogin";
import UserJoin from "./UserPage/UserJoin";
import Logout from "./UserPage/Logout";
import Quit from "./UserPage/Quit";
import ReConfirmID from "./UserPage/ReConfirmID";
import ReConfirmPW from "./UserPage/ReConfirmPW";
import DetailSearch from "./SearchPage/DetailSearch";
import MainSearch from "./SearchPage/MainSearch";
import NewRoom from "./HostPage/NewRoom";
import ModifyRoom from "./HostPage/ModifyRoom";
import ModifyList from "./HostPage/ModifyList";
import HostHistory from "./HostPage/HostHistory";


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
                    <Route path="/" element={<MainSearch/>}>
                        <Route path="detail-search" element={<DetailSearch/>}></Route>
                        <Route path="accom/:id" element={<AccomDetail></AccomDetail>}></Route>
                    </Route>

                    <Route path="/hosting" element={<HostingLayout/>}>
                        <Route path="/hosting/save" element={<NewRoom/>}></Route>
                        <Route path="/hosting/list" element={<ModifyList/>}></Route>
                        <Route path="/hosting/update/:id" element={<ModifyRoom/>}></Route>
                        <Route path="/hosting/history" element={<HostHistory/>}></Route>
                    </Route>

                    <Route path="/payment" element={<PaymentHome/>}></Route>
                    <Route path="/mypage" element={<MyInfoLayout/>}>
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


