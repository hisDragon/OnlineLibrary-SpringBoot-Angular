package com.backend.rest_api.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Book {
    
    @Id
    @Column(name = "bookId")
    private int bookId; // **7-DIGIT** PRIMARY KEY

    @Column(name = "bookName", unique = true)
    private String bookName;

    @Column(name = "bookPath")
    private String bookPath;

    @Column(name = "bookImagePath")
    private String bookImagePath;

    @Column(name = "bookCategory")
    private String bookCategory;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = { @JoinColumn(name = "bookId") },
                inverseJoinColumns = { @JoinColumn(name = "authorId") }
            )
    private List<Author> authors;

    public Book() {} // default constructor

    // parameterised constructor w/o `authors`
    public Book(
        int bookId, String bookName, String bookPath, String bookImagePath, String bookCategory
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPath = bookPath;
        this.bookImagePath = bookImagePath;
        this.bookCategory = bookCategory;
    }

    // parameterised constructor
    public Book(
        int bookId, String bookName, String bookPath, String bookImagePath, List<Author> authors
    ){
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPath = bookPath;
        this.bookImagePath = bookImagePath;
        this.authors = authors;
    }

    // SETTERS and GETTERS
    public void setBookId(int bookId){
        this.bookId = bookId;
    }public int getBookId(){
        return this.bookId;
    }

    public void setBookName(String bookName){
        this.bookName = bookName;
    }public String getBookName(){
        return this.bookName;
    }

    public void setBookPath(String bookPath){
        this.bookPath = bookPath;
    }public String getBookPath(){
        return this.bookPath;
    }

    public void setBookImagePath(String bookImagePath){
        this.bookImagePath = bookImagePath;
    }public String getBookImagePath(){
        return this.bookImagePath;
    }

    public void setBookCategory(String bookCategory){
        this.bookCategory = bookCategory;
    }public String getBookCategory(){
        return this.bookCategory;
    }

    public void setAuthors(List<Author> authors){
        this.authors = authors;
    }public List<Author> getAuthors(){
        return this.authors;
    }
    // SETTERS and GETTERS


}
