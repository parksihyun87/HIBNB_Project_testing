package com.example.hibnb_project.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AccomDTO {
    private Integer id;
    private String hostid;
    private String hostname;
    private String address;
    private String detailaddr;
    private String description;
    private String type;
    private String imageUrl;
    private Integer maxcapacity;
    private Integer pricePerNight;
    private Integer bedrooms;
    private Integer beds;
    private Integer bathrooms;
    private Double average;
    private MultipartFile[] images; // 이미지 파일첨부 시
    private List<String> imageUrls; // 이미지 url
    private List<String> urlsToDelete; // 업데이트 할 때 수정, 삭제되야 할 기존 사진 url, 업데이트 할 때 넣기

//    private Set<BookEntity> books = new LinkedHashSet<>();
//    private Set<ReportEntity> reports = new LinkedHashSet<>();
    private Set<ReviewDTO> reviews = new LinkedHashSet<>();

    //카카오 맵
    private double latitude;
    private double longitude;
}

