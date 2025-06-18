// import React, {useEffect, useRef} from "react";
//
// const KakaoMap = ({latitude, longitude}) => {
//     const mapRef = useRef(null);
//
//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=81894ae6bf6a5f8cada24d9ee0e9f488&autoload=false`;
//         script.async = true;
//
//         script.onload = () => {
//             window.kakao.maps.load(() => {
//                 const map = new window.kakao.maps.Map(mapRef.current, {
//                     center: new window.kakao.maps.LatLng(latitude, longitude),
//                     level: 3,
//                 });
//
//                 new window.kakao.maps.Marker({
//                     position: new window.kakao.maps.LatLng(latitude, longitude),
//                     map: map,
//                 });
//             });
//         };
//
//         document.head.appendChild(script);
//     }, [latitude, longitude]);
//
//     return (
//         <div
//             ref={mapRef}
//             style={{
//                 width: "100%",
//                 height: "300px",
//                 marginTop: "1rem",
//                 borderRadius: "10px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
//             }}
//         />
//     );
// };
//
// export default KakaoMap;
