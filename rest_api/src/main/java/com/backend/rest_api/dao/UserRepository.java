package com.backend.rest_api.dao;

import java.util.Optional;

import com.backend.rest_api.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public Optional<User> findByUserEmail(String userEmail); // added find by email for backend validation of login
}
