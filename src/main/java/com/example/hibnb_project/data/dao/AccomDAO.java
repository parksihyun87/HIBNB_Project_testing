package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.ImgEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import com.example.hibnb_project.data.repository.AccomRepository;
import com.example.hibnb_project.data.repository.ImgRepository;
import com.example.hibnb_project.data.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AccomDAO {
    private final AccomRepository accomRepository;
    private final UserRepository userRepository;
    private final ImgRepository imgRepository;

    @Value("${upload.dir}")
    private String uploadDir;


    public List<AccomEntity> findAllAccoms() {
        List<AccomEntity> accomEntityList=this.accomRepository.findAll();
        return accomEntityList;
    }

    public List<AccomEntity> findDetailedAccom(String addr, LocalDate checkinDate, LocalDate checkoutDate, Integer capacity){
        List<AccomEntity> accomEntityList=this.accomRepository.findDetailedAccom("%"+addr+"%",checkinDate,checkoutDate,capacity);
        return accomEntityList;
    }


    public void saveAccom(String hostid, String hostname, String address
    , String detailaddr, String description, String type, String imageUrl
    , Integer maxCapacity, Integer pricePernight, Integer bedrooms, Integer beds, Integer bathrooms, MultipartFile[] images) throws IOException {
        Optional<UserEntity> hostUser= this.userRepository.findById(hostid);
        if(hostUser.isPresent()) {
            AccomEntity saveAccom= AccomEntity.builder()
                    .hostid(hostUser.get())
                    .hostname(hostname)
                    .address(address)
                    .detailaddr(detailaddr)
                    .description(description)
                    .type(type)
                    .imageUrl("imageUrl")
                    .maxCapacity(maxCapacity)
                    .pricePerNight(pricePernight)
                    .bedrooms(bedrooms)
                    .beds(beds)
                    .bathrooms(bathrooms)
                    .build();
            AccomEntity accom = this.accomRepository.save(saveAccom);

            ImgEntity imgEntity = new ImgEntity();
            imgEntity.setAccom(accom);
            Integer count = 0;
            for (MultipartFile file : images) {
                count++;
                String originalFilename = file.getOriginalFilename();
                String fileName = UUID.randomUUID() + "_" + originalFilename;
                //UUID.randomUUID() : 128비트(16바이트) 길이의 고유한 식별자를 생성(랜덤기반)
                //클라이언트가 보내는 파일이름이 중복될수 있으므로 이를 방지
                String fileUrl = "accom/" + accom.getId().toString() + "/"  + fileName;
                Path filePath = Paths.get(uploadDir + fileUrl);
                switch (count) {
                    case 1 -> imgEntity.setImg1("http://localhost:8080/src/main/resources/static/upload/"+fileUrl);
                    case 2 -> imgEntity.setImg2("http://localhost:8080/src/main/resources/static/upload/"+fileUrl);
                    case 3 -> imgEntity.setImg3("http://localhost:8080/src/main/resources/static/upload/"+fileUrl);
                    case 4 -> imgEntity.setImg4("http://localhost:8080/src/main/resources/static/upload/"+fileUrl);
                }

                System.out.println(filePath.toString());
                // 디렉토리 없으면 생성
                Files.createDirectories(filePath.getParent());
                // 파일 저장
                Files.write(filePath, file.getBytes());
            }
            this.imgRepository.save(imgEntity);

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
