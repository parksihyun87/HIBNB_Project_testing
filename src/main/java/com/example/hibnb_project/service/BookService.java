package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.BookDAO;
import com.example.hibnb_project.data.dto.BookDTO;
import com.example.hibnb_project.data.entity.BookEntity;
import com.example.hibnb_project.data.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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

    public List<BookDTO> findbooksbyHostId(String hostId) {
        Set<BookEntity> bookEntities = this.bookDAO.findbooksbyHostId(hostId);
        List<BookDTO> bookDTOList = new ArrayList<>();
        for (BookEntity bookE : bookEntities) {
            BookDTO bookDTO = BookDTO.builder()
                    .id(bookE.getId())
                    .username(bookE.getUsername().getUsername())
                    .accomid(bookE.getAccomid().getId())
                    .checkindate(bookE.getCheckindate())
                    .checkoutdate(bookE.getCheckoutdate())
                    .totalPrice(bookE.getTotalPrice())
                    .status(bookE.getStatus())
                    .yesorno(bookE.getYesorno())
                    .payment(bookE.getPayment())
                    .address(bookE.getAccomid().getAddress())
                    .type(bookE.getAccomid().getType())
                    .build();
            bookDTOList.add(bookDTO);
        }
        return bookDTOList;
    }

    public String saveBook(BookDTO bookDTO) {
        this.bookDAO.saveBook(bookDTO.getUsername(),bookDTO.getAccomid(),bookDTO.getCheckindate()
                ,bookDTO.getCheckoutdate(),bookDTO.getTotalPrice()
        );
        return "예약 성공";
    }

    public String updateBook(BookDTO bookDTO) {
        this.bookDAO.updateBook(bookDTO.getId(),bookDTO.getUsername(),bookDTO.getAccomid(),bookDTO.getCheckindate()
                ,bookDTO.getCheckoutdate(),bookDTO.getTotalPrice()
        );
        return "업데이트 성공";
    }

    public String cancelBook(BookDTO bookDTO) {
        this.bookDAO.cancelBook(bookDTO.getId(),bookDTO.getUsername(),bookDTO.getAccomid());
        return "예약취소 성공";
    }
}
