package com.example.hibnb_project.service;


import com.example.hibnb_project.data.dao.AccomDAO;
import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.ReviewEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AccomService {
    private final AccomDAO accomDAO;

    public List<AccomDTO> findAllAccoms() {
        List<AccomEntity> accomEntityList= this.accomDAO.findAllAccoms();
        List<AccomDTO> accomDTOList= new ArrayList<>();
        for (AccomEntity accomE : accomEntityList) {

            double avgSum= 0;
            Set<ReviewEntity> reviewEntityList =accomE.getReviews();
            for(ReviewEntity reE:reviewEntityList){
                avgSum+=reE.getRating();
            }
            double avg= reviewEntityList.size() > 0 ? avgSum / reviewEntityList.size() : 0.0;

            AccomDTO accomDTO = AccomDTO.builder()
                    .id(accomE.getId())
                    .hostid((accomE.getHostid()).getUsername())
                    .hostname(accomE.getHostname())
                    .address(accomE.getAddress())
                    .detailaddr(accomE.getDetailaddr())
                    .description(accomE.getDescription())
                    .type(accomE.getType())
                    .imageUrl(accomE.getImageUrl())
                    .average(avg)
                    .maxCapacity(accomE.getMaxCapacity())
                    .pricePerNight(accomE.getPricePerNight())
                    .bedrooms(accomE.getBedrooms())
                    .beds(accomE.getBeds())
                    .bathrooms(accomE.getBathrooms())
//                    .books(accomE.getBooks())
//                    .reports(accomE.getReports())
//                    .reviews(accomE.getReviews())
                    .build();
            accomDTOList.add(accomDTO);
        }
            return accomDTOList;
    }

    public List<AccomDTO> findDetailedAccom() {
        List<AccomEntity> accomEntityList= this.accomDAO.findDetailedAccom();
        List<AccomDTO> accomDTOList= new ArrayList<>();
        for (AccomEntity accomE : accomEntityList) {

            double avgSum= 0;
            Set<ReviewEntity> reviewEntityList =accomE.getReviews();
            for(ReviewEntity reE:reviewEntityList){
                avgSum+=reE.getRating();
            }
            double avg= reviewEntityList.size() > 0 ? avgSum / reviewEntityList.size() : 0.0;

            AccomDTO accomDTO = AccomDTO.builder()
                    .id(accomE.getId())
                    .hostid((accomE.getHostid()).getUsername())
                    .hostname(accomE.getHostname())
                    .address(accomE.getAddress())
                    .detailaddr(accomE.getDetailaddr())
                    .description(accomE.getDescription())
                    .type(accomE.getType())
                    .imageUrl(accomE.getImageUrl())
                    .average(avg)
                    .maxCapacity(accomE.getMaxCapacity())
                    .pricePerNight(accomE.getPricePerNight())
                    .bedrooms(accomE.getBedrooms())
                    .beds(accomE.getBeds())
                    .bathrooms(accomE.getBathrooms())
//                    .books(accomE.getBooks())
//                    .reports(accomE.getReports())
//                    .reviews(accomE.getReviews())
                    .build();
            accomDTOList.add(accomDTO);
        }
        return accomDTOList;
    }

    public String saveAccom(AccomDTO accomDTO) {
        this.accomDAO.saveAccom(accomDTO.getId(),accomDTO.getHostid(),accomDTO.getHostname(),
                accomDTO.getAddress(),accomDTO.getDetailaddr(),accomDTO.getDescription(),accomDTO.getType(),
                accomDTO.getImageUrl(),accomDTO.getMaxCapacity(),accomDTO.getPricePerNight(),accomDTO.getBedrooms(),accomDTO.getBeds(),accomDTO.getBathrooms()
        );
        return "숙소 등록 성공";
    }

    public String updateAccom(AccomDTO accomDTO) {
        this.accomDAO.updateAccom(accomDTO.getId(),accomDTO.getHostid(),accomDTO.getHostname(),
                accomDTO.getAddress(),accomDTO.getDetailaddr(),accomDTO.getDescription(),accomDTO.getType(),
                accomDTO.getImageUrl(),accomDTO.getMaxCapacity(),accomDTO.getPricePerNight(),accomDTO.getBedrooms(),accomDTO.getBeds(),accomDTO.getBathrooms()
        );
        return "숙소 수정 성공";
    }

    public String deleteAccom(AccomDTO accomDTO) {
        this.accomDAO.deleteAccom((accomDTO.getId()),accomDTO.getHostid());
        return "숙소 삭제 성공";
    }

}
