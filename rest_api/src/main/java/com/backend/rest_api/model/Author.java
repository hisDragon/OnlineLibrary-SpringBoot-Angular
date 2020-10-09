package com.backend.rest_api.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Author {
    
    @Id
    @Column(name = "authorId")
    private int authorId; // **5-DIGIT** PRIMARY KEY

    @Column(name = "authorName", unique = true)
    private String authorName;

    @ManyToMany(mappedBy = "authors")
    private List<Book> books;

    public Author() {} // default constructor

    // parameterised constructor w/o `books`
    public Author(
        int authorId, String authorName
    ) {
        this.authorId = authorId;
        this.authorName = authorName;
    }

    // parameterised constructor
    public Author(
        int authorId, String authorName, List<Book> books
    ) {
        this.authorId = authorId;
        this.authorName = authorName;
        this.books = books;
    }

    // SETTERS and GETTERS
    public void setAuthorId(int authorId){
        this.authorId = authorId;
    }public int getAuthorId(){
        return this.authorId;
    }

    public void setAuthorName(String authorName){
        this.authorName = authorName;
    }public String getAuthorName(){
        return this.authorName;
    }

    public void setBooks(List<Book> books){
        this.books = books;
    }public List<Book> getBooks(){
        return this.books;
    }
    // SETTERS and GETTERS

}
