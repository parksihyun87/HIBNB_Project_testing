package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.BookDAO;
import com.example.hibnb_project.data.dto.BookDTO;
import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookDAO bookDAO;

    public List<BookDTO> findbooksbyUsername(BookDTO bookDTO) {


        List<BookEntity> bookEntityList =this.bookDAO.findbooksbyUsername(bookDTO.getUsername());
        List<BookDTO> bookDTOList = new ArrayList<>();

        for (BookEntity bookE : bookEntityList) {
            BookDTO myBookDTO = BookDTO.builder()
                    .id(bookE.getId())
                    .username(bookE.getUsername().getUsername())
                    .accomid(bookE.getAccomid().getId())
                    .checkindate(bookE.getCheckindate())
                    .checkoutdate(bookE.getCheckoutdate())
                    .totalPrice(bookE.getTotalPrice())
                    .status(bookE.getStatus())
                    .yesorno(bookE.getYesorno())
                    .payment(bookE.getPayment())
                    .build();
            bookDTOList.add(myBookDTO);
        }
        return bookDTOList;
    }
}
