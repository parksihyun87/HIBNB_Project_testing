package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.ReviewDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewDAO reviewDAO;
}
