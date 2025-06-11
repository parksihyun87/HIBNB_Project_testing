package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewDAO {
    private final ReviewRepository reviewRepository;
}
