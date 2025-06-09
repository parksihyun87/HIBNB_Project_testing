package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportDAO {
    private final ReportRepository reportRepository;
}
