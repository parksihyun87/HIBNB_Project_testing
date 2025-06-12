import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import apiClient from "./util/apiInstance";
import {userLogout} from "./store";

export default function Logout() {
    const isLogin = useSelector(state => state.userInfo.userLoginFlag);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const loginData = async () => {
            try {
                const response = await apiClient.post("/logout1", {});
                if (isLogin) {
                    dispatch(userLogout());
                }
                alert("로그아웃 성공");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        };
        loginData();
    }, []);

    return (
        <>
        </>
    )
}