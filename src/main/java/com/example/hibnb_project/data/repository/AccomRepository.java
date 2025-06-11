package com.example.hibnb_project.data.repository;

import com.example.hibnb_project.data.entity.AccomEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccomRepository extends JpaRepository<AccomEntity, Integer> {

}
