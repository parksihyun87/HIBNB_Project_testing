package com.example.hibnb_project.data.dto;


import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookDTO {
    private Integer id;
    private String username;
    private Integer accomid;
    private LocalDate checkindate;
    private LocalDate checkoutdate;
    private Integer totalPrice;
    private String status;
    private Boolean yesorno;
    private String payment;
    private LocalDate chechindate;
//    private Set<ReportDTO> reports = new LinkedHashSet<>();
//    private Set<ReviewDTO> reviews = new LinkedHashSet<>();
}