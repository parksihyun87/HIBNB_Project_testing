package com.example.hibnb_project.data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book")
public class BookEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookid", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "username", nullable = false)
    private UserEntity username;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "accomid", nullable = false)
    private AccomEntity accomid;

    @NotNull
    @Column(name = "checkindate", nullable = false)
    private LocalDate checkindate;

    @NotNull
    @Column(name = "checkoutdate", nullable = false)
    private LocalDate checkoutdate;

    @Column(name = "total_price")
    private Integer totalPrice;

    @Size(max = 10)
    @Column(name = "status", length = 10)
    private String status;

    @Column(name = "yesorno")
    private Boolean yesorno;

    @Size(max = 10)
    @Column(name = "payment", length = 10)
    private String payment;

    @NotNull
    @Column(name = "chechindate", nullable = false)
    private LocalDate chechindate;

    @OneToMany(mappedBy = "bookid")
    private Set<ReportEntity> reports = new LinkedHashSet<>();

    @OneToMany(mappedBy = "bookid")
    private Set<ReviewEntity> reviews = new LinkedHashSet<>();

}