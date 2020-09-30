package com.backend.rest_api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userId")
    private int userId; // primary key

    @Column(name = "userName")
    private String userName;

    @Column(name = "userPhone")
    private String userPhone;

    @Column(name = "userAvatar")
    private String userAvatar;

    @Column(name = "userEmail")
    private String userEmail;

    @Column(name = "userPassword")
    private String userPassword;

    public User(){} // default constructor

    // constructor for direct init
    public User(
        int userId, String userName, String userPhone, String userAvatar,String userEmail, String userPassword
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
    // SETTERS and GETTERS


}
