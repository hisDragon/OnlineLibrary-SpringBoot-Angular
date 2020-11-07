package com.backend.rest_api.model;

import java.util.ArrayList;
// import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    
    private static final int DEFAULT_BORROWED_BOOK_ID = 0;

    @Id
    @Column(name = "userId")
    private int userId; // **6-DIGIT** PRIMARY KEY

    @Column(name = "userName")
    private String userName;

    @Column(name = "userPhone")
    private String userPhone;

    @Column(name = "userAvatar")
    private String userAvatar;

    @Column(name = "userEmail", unique = true)
    private String userEmail;

    @Column(name = "userPassword")
    private String userPassword;

    @Column(name = "addedBooks")
    private ArrayList<Integer> addedBooks = new ArrayList<>();

    @Column(name = "borrowedBookId")
    private Integer borrowedBookId = DEFAULT_BORROWED_BOOK_ID;

    public User(){} // default constructor

    // parameterised constructor
    public User(
        int userId, 
        String userName, 
        String userPhone, 
        String userAvatar, 
        String userEmail, 
        String userPassword
    ){

        this.userId = userId;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userAvatar = userAvatar;
        this.userEmail = userEmail;
        this.userPassword = userPassword;

    }


    // SETTERS and GETTERS
    public void setUserId(int userId){
        this.userId = userId;
    }public int getUserId(){
        return this.userId;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }public String getUserName(){
        return this.userName;
    }

    public void setUserPhone(String userPhone){
        this.userPhone = userPhone;
    }public String getUserPhone(){
        return this.userPhone;
    }

    public void setUserAvatar(String userAvatar){
        this.userAvatar = userAvatar;
    }public String getUserAvatar(){
        return this.userAvatar;
    }

    public void setUserEmail(String userEmail){
        this.userEmail = userEmail;
    }public String getUserEmail(){
        return this.userEmail;
    }

    public void setUserPassword(String userPassword){
        this.userPassword = userPassword;
    }public String getUserPassword(){
        return this.userPassword;
    }

    public void setAddedBooks(ArrayList<Integer> addedBooks){
        this.addedBooks = addedBooks;
    }public ArrayList<Integer> getAddedBooks(){
        return this.addedBooks;
    }

    public void setBorrowedBookId(int borrowedBookId){
        this.borrowedBookId = borrowedBookId;
    }public int getBorrowedBookId(){
        return this.borrowedBookId;
    }
    // SETTERS and GETTERS


}
