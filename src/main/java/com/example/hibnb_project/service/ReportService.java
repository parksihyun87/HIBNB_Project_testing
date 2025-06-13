package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.ReportDAO;
import com.example.hibnb_project.data.dto.ReportDTO;
import com.example.hibnb_project.data.entity.ReportEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final ReportDAO reportDAO;


    public ReportDTO findById(Integer reportid) {
        ReportEntity report = this.reportDAO.findById(reportid);
        return ReportDTO.builder()
                .id(report.getId())
                .accomid(report.getAccomid().getId())
                .bookid(report.getBookid().getId())
                .username(report.getUsername().getUsername())
                .type(report.getType())
                .comment(report.getComment())
                .createdAt(report.getCreatedAt())
                .build();
    }

    public List<ReportDTO> findAll() {
        List<ReportEntity> list = this.reportDAO.findAll();
        List<ReportDTO> dtos = new ArrayList<ReportDTO>();
        for (ReportEntity reportEntity : list) {
            ReportDTO reportDTO = ReportDTO.builder()
                    .id(reportEntity.getId())
                    .accomid(reportEntity.getAccomid().getId())
                    .bookid(reportEntity.getBookid().getId())
                    .username(reportEntity.getUsername().getUsername())
                    .type(reportEntity.getType())
                    .comment(reportEntity.getComment())
                    .createdAt(reportEntity.getCreatedAt())
                    .build();
            dtos.add(reportDTO);
        }
        return dtos;
    }

    public List<ReportDTO> findByType(String type) {
        List<ReportEntity> list = this.reportDAO.findByType(type);
        List<ReportDTO> reportDTOList = new ArrayList<>();
        for (ReportEntity reportEntity : list) {
            ReportDTO reportDTO = ReportDTO.builder()
                    .id(reportEntity.getId())
                    .accomid(reportEntity.getAccomid().getId())
                    .bookid(reportEntity.getBookid().getId())
                    .username(reportEntity.getUsername().getUsername())
                    .type(reportEntity.getType())
                    .comment(reportEntity.getComment())
                    .createdAt(reportEntity.getCreatedAt())
                    .build();
            reportDTOList.add(reportDTO);
        }
        return reportDTOList;
    }

    public List<ReportDTO> findByAccomid(Integer accomid) {
        List<ReportEntity> reportEntityList = this.reportDAO.findByAccomid(accomid);
        List<ReportDTO> reportDTOList = new ArrayList<>();
        for (ReportEntity reportEntity : reportEntityList) {
            ReportDTO reportDTO = ReportDTO.builder()
                    .id(reportEntity.getId())
                    .accomid(reportEntity.getAccomid().getId())
                    .bookid(reportEntity.getBookid().getId())
                    .username(reportEntity.getUsername().getUsername())
                    .type(reportEntity.getType())
                    .comment(reportEntity.getComment())
                    .createdAt(reportEntity.getCreatedAt())
                    .build();
            reportDTOList.add(reportDTO);
        }
        return reportDTOList;
    }

    public void save(ReportDTO reportDTO) {
        this.reportDAO.save(reportDTO.getAccomid(), reportDTO.getBookid(), reportDTO.getUsername()
        , reportDTO.getType(), reportDTO.getComment(), reportDTO.getCreatedAt());
    }

    public void delete(Integer reportid) {
        this.reportDAO.delete(reportid);
    }

}
