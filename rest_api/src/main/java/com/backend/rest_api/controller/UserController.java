package com.backend.rest_api.controller;

import com.backend.rest_api.dao.UserRepository;
import com.backend.rest_api.model.User;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping(path = "/users")
    public @ResponseBody List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping(path = "/users/{userId}")
    public @ResponseBody Optional<User> getUser(@PathVariable("userId") int userId){
        return userRepository.findById(userId);
    }

    @PostMapping(path = "/addUser")
    public @ResponseBody User postUser(@RequestBody User user){
        userRepository.save(user);
        return user;
    }

}
