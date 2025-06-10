
export default function MyRoom(){
        /*
        * 이용내역
        * 대충 짜본 틀
        */
    const history = [
        {
            id: 1,
            place: "서울 홍대 게스트하우스",
            date: "2025-06-01 ~ 2025-06-03",
            isMostRecent: true,
        },
        {
            id: 2,
            place: "부산 해운대 민박",
            date: "2025-04-15 ~ 2025-05-15",
            isMostRecent: false,
        },
        {
            id: 3,
            place: "제주도 펜션",
            date: "2025-02-10 ~ 2025-02-13",
            isMostRecent: false,
        },
    ];

    return (
        <div>
            <h2>이용 내역</h2>
            <ul>
                {history.map((item) => (
                    <li key={item.id}>
                        <div>
                            <strong>{item.place}</strong>
                            <div>{item.date}</div>
                            {item.isMostRecent && (
                                <button>리뷰 쓰기</button>
                            )}
                        </div>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
}