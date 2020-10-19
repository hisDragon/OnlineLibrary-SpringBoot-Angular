package com.backend.rest_api.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EmailConfig {

    @Value("${spring.mail.host}")
    private String host;
    @Value("${spring.mail.port}")
    private int port;
    @Value("${spring.mail.username}")
    private String username;
    @Value("${spring.mail.password}")
    private String password;

    public void setHost(String host){
        this.host = host;
    }public String getHost(){
        return this.host;
    }
    public void setPort(int port){
        this.port = port;
    }public int getPort(){
        return this.port;
    }
    public void setUsername(String username){
        this.username = username;
    }public String getUsername(){
        return this.username;
    }
    public void setPassword(String password){
        this.password = password;
    }public String getPassword(){
        return this.password;
    }
    
}
