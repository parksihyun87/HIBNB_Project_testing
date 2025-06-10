package com.example.hibnb_project.data.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "review")
public class ReviewEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reviewid", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "accomid", nullable = false)
    @JsonBackReference
    private AccomEntity accomid;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bookid", nullable = false)
    @JsonBackReference
    private BookEntity bookid;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "username", nullable = false)
    @JsonBackReference
    private UserEntity username;

    @NotNull
    @Column(name = "rating", nullable = false)
    private Double rating;

    @Lob
    @Column(name = "comment")
    private String comment;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

}