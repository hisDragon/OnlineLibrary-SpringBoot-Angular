package com.backend.rest_api.service;

import java.security.SecureRandom;
import java.util.NoSuchElementException;

import com.backend.rest_api.model.EmailConfig;
import com.backend.rest_api.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;


@Service
public class SendEmailService {

    @Autowired
    private EmailConfig emailConfig;

    @Autowired
    private UserService userService;

    private String _from = "noreply@onlinelibrary.com";

    // generation algorithm
    private static String generatePassword(){

        // length of the password
        final int len = 10;

        // ASCII range - alphanumeric (0-9, a-z, A-Z)
        final String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$";

        SecureRandom random = new SecureRandom();
        StringBuilder stringBuilder = new StringBuilder();

        // each iteration of loop chooses a character randomly from the given ASCII range
        // and append it to StringBuilder instance
        for (int i = 0; i < len; i++) {
			int randomIndex = random.nextInt(chars.length());
			stringBuilder.append(chars.charAt(randomIndex));
		}

        return stringBuilder.toString();
    }

    public User sendMail(String email){

        // custom mail sender
        JavaMailSenderImpl javaMailSenderImpl = new JavaMailSenderImpl();
        javaMailSenderImpl.setHost(this.emailConfig.getHost());
        javaMailSenderImpl.setPort(this.emailConfig.getPort());
        javaMailSenderImpl.setUsername(this.emailConfig.getUsername());
        javaMailSenderImpl.setPassword(this.emailConfig.getPassword());

        // generate a password
        String password = SendEmailService.generatePassword();

        // change the password of the user in the DataBase
        User userUpdate = null;
        try {
            userUpdate = this.userService.getUserByEmail(email).orElseThrow();
            userUpdate.setUserPassword(password);
            this.userService.saveUser(userUpdate); // user password updated
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return null;
        }

        SimpleMailMessage simpleMessage = new SimpleMailMessage();
        simpleMessage.setFrom(this._from);
        simpleMessage.setTo(email);
        simpleMessage.setSubject("Change Of Password");
        simpleMessage.setText(
            "Auto-Generated Password: " + password + "\n" +// send password through mail
            "Use this password for future references or change the password\n" +
            "Do not reply to this mail\n" +
            "This is a System Generated mail\n" +
            "Regards,\n" +
            "Online Library Team"
        );

        // send message/email
        javaMailSenderImpl.send(simpleMessage);

        return userUpdate;

    }

}
