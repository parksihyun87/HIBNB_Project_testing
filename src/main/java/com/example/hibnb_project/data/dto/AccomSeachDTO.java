package com.example.hibnb_project.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AccomSeachDTO {
    // 장소, 날짜2가지(시작,종료), 인원
    // 현재 그 기간의 예약이 없는 숙소의 정보를 해당 기간동안의 항목으로 만들 것. 추가항목(기존정보+총 금액, 총 날짜)
    // 보여질때 인기도 정책이 있었으면 좋겠음.( 1. 리뷰가 많다. 2. 예약이 많다 3.평점(리뷰 중)이 높다) 이런걸 확장성 염두
    private String address;//(도,시,군) 숙소
    private LocalDate checkindate;// 예약 시작일
    private LocalDate checkoutdate;// 예약 종료일(이 기간들을 포함하지 않아야 함)
    private Integer maxcapacity; // 숙소
}

// 가져올 dto에 있어야 할 정보: 모든 accom정보( accomdto기준), 예약 정보는 안보여도 됨.
//