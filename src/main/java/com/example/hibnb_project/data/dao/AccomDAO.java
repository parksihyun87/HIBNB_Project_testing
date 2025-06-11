package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import com.example.hibnb_project.data.repository.AccomRepository;
import com.example.hibnb_project.data.repository.UserRepository;
import io.jsonwebtoken.security.Jwks;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    public List<AccomEntity> findDetailedAccom() {
        List<AccomEntity> accomEntityList=this.accomRepository.findAll();
        return accomEntityList;
    }


    public void saveAccom(Integer id, String hostid, String hostname, String address
    , String detailaddr, String description, String type, String imageUrl
    , Integer maxCapacity, Integer pricePernight, Integer bedrooms, Integer beds, Integer bathrooms) {
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
                    .imageUrl(imageUrl)
                    .maxCapacity(maxCapacity)
                    .pricePerNight(pricePernight)
                    .bedrooms(bedrooms)
                    .beds(beds)
                    .bathrooms(bathrooms)
                    .build();
            this.accomRepository.save(saveAccom);
            return;
        }
        throw new EntityNotFoundException("유저를 찾을 수 없습니다.");
    }

    public void updateAccom(Integer id, String hostid, String hostname, String address
            , String detailaddr, String description, String type, String imageUrl
            , Integer maxCapacity, Integer pricePernight, Integer bedrooms, Integer beds, Integer bathrooms) {
        Optional<AccomEntity> accomEntity= this.accomRepository.findById(id);
        if(accomEntity.isPresent()) {
            AccomEntity updateAccom=accomEntity.get();
            if(updateAccom.getHostid().getUsername().equals(hostid)) {
                updateAccom.setAddress(address);
                updateAccom.setDetailaddr(detailaddr);
                updateAccom.setDescription(description);
                updateAccom.setType(type);
                updateAccom.setImageUrl(imageUrl);
                updateAccom.setMaxCapacity(maxCapacity);
                updateAccom.setPricePerNight(pricePernight);
                updateAccom.setBedrooms(bedrooms);
                updateAccom.setBeds(beds);
                updateAccom.setBathrooms(bathrooms);
                this.accomRepository.save(updateAccom);
                return;
            }
            throw new EntityNotFoundException("해당 숙소의 호스트가 아닙니다.");
        }
        throw new EntityNotFoundException("숙소를 찾을 수 없습니다.");
    }


    public void deleteAccom(Integer id, String hostid) {
        Optional<AccomEntity> accomEntity= this.accomRepository.findById(id);
        if(accomEntity.isPresent()) {
            AccomEntity updateAccom=accomEntity.get();
            if(updateAccom.getHostid().getUsername().equals(hostid)) {
                this.accomRepository.deleteById(id);
                return;
            }
            throw new EntityNotFoundException("해당 숙소의 호스트가 아닙니다.");
        }
        throw new EntityNotFoundException("숙소를 찾을 수 없습니다.");
    }
}
