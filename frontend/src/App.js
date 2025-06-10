import {Route, Routes} from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import MainSearch from "./MainSearch";
import Hosting from "./Hosting";
import UserLogin from "./UserLogin";
import UserJoin from "./UserJoin";
import DetailSearch from "./DetailSearch";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/login" element={<UserLogin/>}></Route>
                    <Route path="/join" element={<UserJoin/>}></Route>
                    <Route path={"/"} element={<MainSearch/>}>
                        <Route path={"detail-search"} element={<DetailSearch/>}></Route>
                    </Route>
                    <Route path={"/hosting"} element={<Hosting/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
