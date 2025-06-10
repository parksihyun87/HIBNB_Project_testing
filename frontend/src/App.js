import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MyInfoLayout from "./MyInfoLayout";
import MyInfo from "./MyInfo";
import MyReserve from "./MyReserve";
import MyRoom from "./MyRoom";
import Quit from "./Quit";
import PaymentHome from "./PaymentHome";
import HibnbReserve from "./HibnbReserve";

function App() {
  return (
      // 내 정보 라우팅
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/accommodation" replace />} />
              <Route path={"/accommodation"} element={<HibnbReserve/>}/>
              <Route path="/payment" element={<PaymentHome />} />

              <Route path="/mypage" element={<MyInfoLayout />}>
                  <Route path="profile" element={<MyInfo />} />
                  <Route path="reservations" element={<MyReserve />} />
                  <Route path="myroom" element={<MyRoom />} />
                  <Route path="quit" element={<Quit />} />
              </Route>


          </Routes>
      </BrowserRouter>
  );
}

export default App;
