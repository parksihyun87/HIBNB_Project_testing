package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.ReportDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportDAO reportDAO;
}
