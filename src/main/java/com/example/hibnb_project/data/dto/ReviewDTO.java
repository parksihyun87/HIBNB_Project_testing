package com.example.hibnb_project.data.dto;

import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewDTO {
    private Integer id;
    private Integer accomid;
    private Integer bookid;
    private String username;
    private Double rating;
    private String comment;
    private Instant createdAt;
}
