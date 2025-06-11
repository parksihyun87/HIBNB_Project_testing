package com.example.hibnb_project.data.repository;

import com.example.hibnb_project.data.entity.AccomEntity;
import com.example.hibnb_project.data.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccomRepository extends JpaRepository<AccomEntity, Integer> {

}
