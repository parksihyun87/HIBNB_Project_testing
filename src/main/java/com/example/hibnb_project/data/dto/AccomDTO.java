package com.example.hibnb_project.data.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private Integer maxCapacity;
    private Integer pricePerNight;

    private Integer bedrooms;
    private Integer beds;
    private Integer bathrooms;

    private Double average;
//    private Set<BookEntity> books = new LinkedHashSet<>();
//    private Set<ReportEntity> reports = new LinkedHashSet<>();
//    private Set<ReviewEntity> reviews = new LinkedHashSet<>();
}

