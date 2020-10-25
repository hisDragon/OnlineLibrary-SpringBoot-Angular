package com.backend.rest_api.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.backend.rest_api.dao.UserRepository;
import com.backend.rest_api.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

interface IUserService {
    public abstract List<User> getUsers();
    public abstract Optional<User> getUserById(int userId);
    public abstract Optional<User> getUserByEmail(String userEmail);

    public abstract User saveUser(User user);
}

@Service
public class UserService implements IUserService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(int userId) {
        return this.userRepository.findById(userId);
    }

    @Override
    public Optional<User> getUserByEmail(String userEmail) {
        return this.userRepository.findByUserEmail(userEmail);
    }

    // method to generate random integer for primary key
    private int generateRandId(){
        Random r = new Random(); // java.util.Random
        int userId = 100000 + r.nextInt(900000); // random 6-digit integer

        // check if there is a user with that userId
        List<User> users = this.getUsers();
        for(User user : users){
            if(user.getUserId() == userId) 
                userId = 100000 + r.nextInt(900000); // if `userId` already exists generate a new one
        }

        return userId;
    }

    @Override
    public User saveUser(User user) {
        if(this.userRepository.findByUserEmail(user.getUserEmail()).isPresent()){
            // update existing emailed user
            User userUpdate = this.userRepository.findByUserEmail(user.getUserEmail()).get();
            userUpdate.setUserName(user.getUserName());
            userUpdate.setUserPhone(user.getUserPhone());
            userUpdate.setUserAvatar(user.getUserAvatar());
            userUpdate.setUserPassword(user.getUserPassword());
            this.userRepository.save(userUpdate);
            return userUpdate;
        }
        
        user.setUserId(this.generateRandId());
        this.userRepository.save(user);
        return user;
    }


}
