package com.backend.rest_api.controller;

import com.backend.rest_api.service.SendEmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("sendEmail")
@CrossOrigin
public class MailController {

    @Autowired
    private SendEmailService sendEmailService;

    @PostMapping
    public @ResponseBody String sendMail(){
        this.sendEmailService.sendMail();
        return "Email Sent Successfully";
    }
    
}
