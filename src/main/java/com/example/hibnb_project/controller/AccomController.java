package com.example.hibnb_project.controller;

import com.example.hibnb_project.data.dto.AccomDTO;
import com.example.hibnb_project.service.AccomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @PostMapping(value = "/post")
    public ResponseEntity<String> postAccom(AccomDTO accomDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(this.accomService.postAccom(accomDTO));
    }

}
