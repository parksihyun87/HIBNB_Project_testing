package com.example.hibnb_project.service;

import com.example.hibnb_project.data.dao.UserDAO;
import com.example.hibnb_project.data.dto.UserDTO;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDAO userDAO;

    public void join(UserDTO userDTO){
        String joinRole = "";
        String username2 = "";
        String[] split = userDTO.getUsername().split("@");
        if(split.length==2){
            joinRole = "ROLE_"+split[0];
            username2 = split[1];
        }
        if(this.userDAO.isExist(username2)){
            throw new EntityExistsException("username already exists");
        }
        this.userDAO.join(username2, userDTO.getPassword(), joinRole, userDTO.getName(), userDTO.getPhone(), userDTO.getAge());
    }
}
