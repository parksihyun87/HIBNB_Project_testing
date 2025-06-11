import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const userInfoSlice=createSlice({
    name:"userInfo",
    initialState:{
        userInfoList:[],
        adminLoginFlag:false,
        userLoginFlag:false
    },
    reducers:{
        addUserInfo:(state, action)=>{
            state.userInfoList.push(action.payload);
        },
        setUserInfoList:(state, action)=>{
            state.userInfoList=action.payload;
        },
        clearUserInfo:(state)=>{
            state.userInfoList=[];
        },
        adminLogin:(state)=>{
            state.adminLoginFlag=true;
        },
        adminLogout:(state)=>{
            state.adminLoginFlag=false;
        },
        userLogin:(state)=>{
            state.userLoginFlag=true;
        },
        userLogout:(state)=>{
            state.userLoginFlag=false;
        },
    }
});

const initState={
    token:null,
}

const tokenSlice=createSlice({
    name:"token",
    initialState:initState,
    reducers:{
        setToken:(state, action)=>{
            state.token=action.payload;
        }
    }
});

const persistConfig={
    key:"root",
    storage,
    whitelist:["userInfo", "token"],
};

const rootReducer=combineReducers({
    userInfo:userInfoSlice.reducer,
    token:tokenSlice.reducer
});

const persistedReducer=persistReducer(persistConfig, rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
});

export const persistor=persistStore(store);

export const {userLogin, userLogout, addUserInfo,clearUserInfo, setUserInfoList, adminLogin, adminLogout}=userInfoSlice.actions;
export const {setToken} = tokenSlice.actions;
