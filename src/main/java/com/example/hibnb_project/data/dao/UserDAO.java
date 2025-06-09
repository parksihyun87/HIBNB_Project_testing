package com.example.hibnb_project.data.dao;

import com.example.hibnb_project.data.entity.UserEntity;
import com.example.hibnb_project.data.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDAO {
    private final UserRepository userRepository;


    public Boolean isExist(String username) {
        return this.userRepository.existsById(username);
    }

    public UserEntity findById(String username) {
        return this.userRepository.findById(username).orElse(null);
    }

    public void join(String username, String password, String role, String name, String phone, Integer age) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        UserEntity authenticationEntity = UserEntity.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .role(role)
                .name(name)
                .phone(phone)
                .age(age)
                .build();
        this.userRepository.save(authenticationEntity);
    }

}
