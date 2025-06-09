package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BookDAO {
    private final BookRepository bookRepository;
}
