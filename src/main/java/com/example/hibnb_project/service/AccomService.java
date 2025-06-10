package com.example.hibnb_project.service;


import com.example.hibnb_project.data.dao.AccomDAO;
import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.ReviewEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import com.example.hibnb_project.data.repository.AccomRepository;
import com.example.hibnb_project.data.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.*;

@Service
@RequiredArgsConstructor
public class AccomService {
    private final AccomDAO accomDAO;

    public List<AccomDTO> findAllAccoms() {
        List<AccomEntity> accomEntityList= this.accomDAO.findAllAccoms();
        List<AccomDTO> accomDTOList= new ArrayList<>();
        List<ReviewEntity> reviewEntitySet = new ArrayList<>();
        Integer count = 0;

        for (AccomEntity accomE : accomEntityList) {
            AccomDTO accomDTO = AccomDTO.builder()
                    .id(accomE.getId())
                    .hostid((accomE.getHostid()).getUsername())
                    .hostname(accomE.getHostname())
                    .address(accomE.getAddress())
                    .detailaddr(accomE.getDetailaddr())
                    .description(accomE.getDescription())
                    .type(accomE.getType())
                    .createdAt(accomE.getCreatedAt())
                    .imageUrl(accomE.getImageUrl())
//                    .average(accomE.getAverage())
                    .maxCapacity(accomE.getMaxCapacity())
                    .pricePerNight(accomE.getPricePerNight())
                    .books(accomE.getBooks())
                    .reports(accomE.getReports())
                    .reviews(accomE.getReviews())
                    .build();
            accomDTOList.add(accomDTO);

            //  포문 안에서 각자의 평점 구해서 넣기

//            Set<ReviewEntity> reviewEntityList =accomE.getReviews();
//            for(ReviewEntity reE:reviewEntityList){
//                reE
//            }
        }

            return accomDTOList;
    }

    public String postAccom(AccomDTO accomDTO) {
        this.accomDAO.postAccom(accomDTO.getId(),accomDTO.getHostid(),accomDTO.getHostname(),
                accomDTO.getAddress(),accomDTO.getDetailaddr(),accomDTO.getDescription(),accomDTO.getType(),
                accomDTO.getCreatedAt(),accomDTO.getImageUrl(),accomDTO.getMaxCapacity(),accomDTO.getPricePerNight()
        );
        return "숙소 등록 성공";
    }
}
