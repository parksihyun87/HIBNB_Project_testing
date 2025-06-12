package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookDAO {
    private final BookRepository bookRepository;

    public List<BookEntity> findbooksbyUsername(String username) {
        return this.bookRepository.findAllByUsername(username);
    }
}
