import {Route, Routes} from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";
import MainSearch from "./MainSearch";
import Hosting from "./Hosting";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/login" element={null}></Route>
                    <Route path="/join" element={null}></Route>
                    <Route path={"/"} element={<MainSearch/>}></Route>
                    <Route path={"/hosting"} element={<Hosting/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
