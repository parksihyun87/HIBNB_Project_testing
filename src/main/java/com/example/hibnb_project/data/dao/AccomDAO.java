package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import com.example.hibnb_project.data.repository.AccomRepository;
import com.example.hibnb_project.data.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AccomDAO {
    private final AccomRepository accomRepository;
    private final UserRepository userRepository;

    public List<AccomEntity> findAllAccoms() {
        List<AccomEntity> accomEntityList=this.accomRepository.findAll();
        return accomEntityList;
    }

    public void postAccom(Integer id, String hostid, String hostname, String address
    , String detailaddr, String description, String type, Instant createdAt, String imageUrl
    , Integer maxCapacity, Integer pricePernight) {
        Optional<UserEntity> hostUser= this.userRepository.findById(hostid);
        if(hostUser.isPresent()) {
            AccomEntity saveAccom= AccomEntity.builder()
                    .id(id)
                    .hostid(hostUser.get())
                    .hostname(hostname)
                    .address(address)
                    .detailaddr(detailaddr)
                    .description(description)
                    .type(type)
                    .createdAt(createdAt)
                    .imageUrl(imageUrl)
                    .maxCapacity(maxCapacity)
                    .pricePerNight(pricePernight)
                    .build();
            this.accomRepository.save(saveAccom);
            return;
        }
        throw new EntityNotFoundException("유저를 찾을 수 없습니다.");
    }
}
