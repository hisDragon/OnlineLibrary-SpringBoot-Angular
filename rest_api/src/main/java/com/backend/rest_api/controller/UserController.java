package com.backend.rest_api.controller;

import com.backend.rest_api.model.User;
import com.backend.rest_api.service.UserService;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    //////////////////////////////// GET ////////////////////////////////

    // getting all users
    @GetMapping(path = "/users/all")
    @CrossOrigin
    public @ResponseBody List<User> getUsers(){
        return this.userService.getUsers();
    }

    // finding users by id
    @GetMapping(path = "/users/{userId}")
    @CrossOrigin
    public @ResponseBody Optional<User> getUser(@PathVariable("userId") int userId){
        return this.userService.getUserById(userId);
    }

    // finding users by email
    @GetMapping(path = "/users/email/{userEmail}")
    @CrossOrigin
    public @ResponseBody Optional<User> getUser(@PathVariable("userEmail") String userEmail){
        return this.userService.getUserByEmail(userEmail);
    }

    // get all by list of id
    @GetMapping(path = "/users/ids")
    @CrossOrigin
    public @ResponseBody List<User> getAllByIds(@RequestParam(name = "id") List<Integer> ids){
        return this.userService.getUsersByIds(ids);
    }

    ////////////////////////////// GET END //////////////////////////////

    /////////////////////////////// POST ////////////////////////////////

    // saving user into DB
    @PostMapping(path = "/users/addUser")
    @CrossOrigin
    public @ResponseBody User postUser(@RequestBody User user){
        return this.userService.saveUser(user);
    }

    ///////////////////////////// POST END //////////////////////////////

    
    //////////////////////////////// PUT ////////////////////////////////

    ////////////////////////////// PUT END //////////////////////////////


    ////////////////////////////// DELETE ///////////////////////////////

    //////////////////////////// DELETE END /////////////////////////////
}
