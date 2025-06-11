package com.example.hibnb_project.controller;

import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.ReviewEntity;
import com.example.hibnb_project.data.repository.AccomRepository;
import com.example.hibnb_project.data.repository.ReviewRepository;
import com.example.hibnb_project.service.AccomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/accom") // 백 api 기본경로 :"/accom"


public class AccomController {
    private final AccomService accomService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<AccomDTO>> findAllAccoms() {
         List<AccomDTO> accomDTOList= this.accomService.findAllAccoms();
         return ResponseEntity.status(HttpStatus.OK).body(accomDTOList);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<String> saveAccom(@RequestBody AccomDTO accomDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(this.accomService.saveAccom(accomDTO));
    }

    @PutMapping(value="/update")
    public ResponseEntity<String> updateAccom(@RequestBody AccomDTO accomDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(this.accomService.updateAccom(accomDTO));
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<String> deleteAccom(@RequestBody AccomDTO accomDTO) {//accomid, hostid
        return ResponseEntity.status(HttpStatus.OK).body(this.accomService.deleteAccom(accomDTO));
    }
}
