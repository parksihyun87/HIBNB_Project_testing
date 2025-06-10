package com.example.hibnb_project.data.dto;

import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.entity.ReportEntity;
import com.example.hibnb_project.data.entity.ReviewEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.LinkedHashSet;
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
    private Instant createdAt;
    private String imageUrl;
    private Double average;
    private Integer maxCapacity;
    private Integer pricePerNight;
    private Set<BookEntity> books = new LinkedHashSet<>();
    private Set<ReportEntity> reports = new LinkedHashSet<>();
    private Set<ReviewEntity> reviews = new LinkedHashSet<>();
}

