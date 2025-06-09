import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Logout from "./Logout";
import MyInfoLayout from "./MyInfoLayout";
import MyInfo from "./MyInfo";
import MyReserve from "./MyReserve";
import MyRoom from "./MyRoom";
import Quit from "./Quit";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/mypage/profile" replace />} />
          <Route path="/mypage" element={<MyInfoLayout/>}>
            <Route path="profile" element={<MyInfo />} />
            <Route path="reservations" element={<MyReserve />} />
            <Route path="history" element={<MyRoom />} />
            <Route path="withdraw" element={<Quit />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
