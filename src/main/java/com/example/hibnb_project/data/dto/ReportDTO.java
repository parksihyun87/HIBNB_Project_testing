package com.example.hibnb_project.data.dto;

import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReportDTO {
    private Integer id;
    private AccomEntity accomid;
    private BookEntity bookid;
    private UserEntity username;
    private String comment;
    private Instant createdAt;
}
