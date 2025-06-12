package com.example.hibnb_project.controller;

import com.example.hibnb_project.data.dto.BookDTO;
import com.example.hibnb_project.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/book")
public class BookController {
    private final BookService bookService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<BookDTO>> findbooksbyUsername(@RequestBody BookDTO bookDTO) {//username 필요
        List<BookDTO> bookDTOList= this.bookService.findbooksbyUsername(bookDTO);
        return ResponseEntity.status(HttpStatus.OK).body(bookDTOList);
    }
}
