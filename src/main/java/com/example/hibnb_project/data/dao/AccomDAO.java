package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.repository.AccomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccomDAO {
    private final AccomRepository accomRepository;
}
