package com.backend.rest_api.controller;

import com.backend.rest_api.dao.UserRepository;
import com.backend.rest_api.model.User;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @Autowired
    UserRepository userRepository;

    // getting all users
    @GetMapping(path = "/users")
    @CrossOrigin
    public @ResponseBody List<User> getUsers(){
        return userRepository.findAll();
    }

    // finding users by id
    @GetMapping(path = "/users/{userId}")
    @CrossOrigin
    public @ResponseBody Optional<User> getUser(@PathVariable("userId") int userId){
        return userRepository.findById(userId);
    }

    // finding users by email
    @GetMapping(path = "/users/email/{userEmail}")
    @CrossOrigin
    public @ResponseBody Optional<User> getUser(@PathVariable("userEmail") String userEmail){
        return userRepository.findByUserEmail(userEmail);
    }

    // saving user into DB
    @PostMapping(path = "/addUser")
    @CrossOrigin
    public @ResponseBody User postUser(@RequestBody User user){
        userRepository.save(user);
        return user;
    }

}
