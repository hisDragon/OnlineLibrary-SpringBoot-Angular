package com.backend.rest_api.dao;

import java.util.Optional;

import com.backend.rest_api.model.Book;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{
    public Optional<Book> findByBookName(String bookName); // for adding authors without requiring bookId
}
