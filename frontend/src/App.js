import {Route, Routes} from "react-router-dom";
import "./App.css";
import MainLayout from "./MainLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path="/login" element={null}></Route>
                    <Route path="/join" element={null}></Route>
                    <Route path="/search" element={null}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
