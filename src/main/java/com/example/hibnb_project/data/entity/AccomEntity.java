package com.example.hibnb_project.data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.Instant;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "accom")
public class AccomEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accomid", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hostid", nullable = false)
    private UserEntity hostid;

    @Size(max = 10)
    @NotNull
    @Column(name = "hostname", nullable = false, length = 10)
    private String hostname;

    @Size(max = 255)
    @NotNull
    @Column(name = "address", nullable = false)
    private String address;

    @Size(max = 255)
    @NotNull
    @Column(name = "detailaddr", nullable = false)
    private String detailaddr;

    @NotNull
    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @Size(max = 10)
    @NotNull
    @Column(name = "type", nullable = false, length = 10)
    private String type;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Size(max = 255)
    @NotNull
    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "average")
    private Double average;

    @Column(name = "max_capacity")
    private Integer maxCapacity;

    @Column(name = "price_per_night")
    private Integer pricePerNight;

    @OneToMany(mappedBy = "accomid")
    private Set<BookEntity> books = new LinkedHashSet<>();

    @OneToMany(mappedBy = "accomid")
    private Set<ReportEntity> reports = new LinkedHashSet<>();

    @OneToMany(mappedBy = "accomid")
    private Set<ReviewEntity> reviews = new LinkedHashSet<>();

}