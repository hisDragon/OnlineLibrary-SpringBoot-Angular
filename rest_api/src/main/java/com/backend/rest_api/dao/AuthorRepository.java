package com.backend.rest_api.dao;

import java.util.Optional;

import com.backend.rest_api.model.Author;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer> {
    public Optional<Author> findByAuthorName(String authorName);
}
