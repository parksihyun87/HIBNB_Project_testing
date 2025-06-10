
export default function MyReserve(){
    const mockReservations = [
        {
            id: 1,
            accommodation: '경기 가평군 캠핑장',
            reserverName: '최장박',
            checkIn: '2025-06-20',
            checkOut: '2025-07-20',
            guests: 2,
            status: '예약완료',
        },
        {
            id: 2,
            accommodation: '부산 해운대 바다뷰 숙소',
            reserverName: '이영희',
            checkIn: '2025-07-01',
            checkOut: '2025-07-03',
            guests: 1,
            status: '예약취소됨',
        },
        {
            id: 3,
            accommodation: '제주 한달살기 민박집',
            reserverName: '최장박',
            checkIn: '2025-08-10',
            checkOut: '2025-09-10',
            guests: 1,
            status: '예약완료',
        },
    ];

    return (
        <div>
            <h2>예약 정보</h2>

            {mockReservations.length === 0 ? (
                <p>예약 내역이 없습니다.</p>
            ) : (
                mockReservations.map((res) => (
                    <div key={res.id}>
                        <p>숙소명: {res.accommodation}</p>
                        <p>예약자 이름: {res.reserverName}</p>
                        <p>체크인: {res.checkIn}</p>
                        <p>체크아웃: {res.checkOut}</p>
                        <p>인원: {res.guests}명</p>
                        <p>상태: {res.status}</p>
                        <button>상세 보기</button>
                        {res.status === '예약완료' && <button>예약 취소</button>}
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}