package com.example.hibnb_project.controller;

import com.example.hibnb_project.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReportController {
    private final ReportService reportService;

}
