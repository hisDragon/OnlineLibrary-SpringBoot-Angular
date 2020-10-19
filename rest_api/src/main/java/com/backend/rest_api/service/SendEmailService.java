package com.backend.rest_api.service;

import com.backend.rest_api.model.EmailConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class SendEmailService {

    @Autowired
    private EmailConfig emailConfig;

    public void sendMail(){

        // custom mail sender
        JavaMailSenderImpl javaMailSenderImpl = new JavaMailSenderImpl();
        javaMailSenderImpl.setHost(this.emailConfig.getHost());
        javaMailSenderImpl.setPort(this.emailConfig.getPort());
        javaMailSenderImpl.setUsername(this.emailConfig.getUsername());
        javaMailSenderImpl.setPassword(this.emailConfig.getPassword());

        SimpleMailMessage simpleMessage = new SimpleMailMessage();
        simpleMessage.setFrom("noreply@onlinelibrary.com");
        simpleMessage.setTo("hmm@hmm.com");
        simpleMessage.setSubject(
            "<html>" +
                "<body>" +
                    "<h2>Online Library Mail</h2>" +
                    "<p>" +
                        "Test Message" +
                    "</p>" +
                "</body>" +
            "</html>"
        );
        simpleMessage.setText("Simple Text");

        // send message/email
        javaMailSenderImpl.send(simpleMessage);

    }

}
