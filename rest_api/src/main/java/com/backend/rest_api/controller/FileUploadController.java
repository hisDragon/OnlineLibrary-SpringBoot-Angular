package com.backend.rest_api.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
public class FileUploadController {
    
    @PostMapping(path = "/files/upload/{category}")
    @CrossOrigin
    public @ResponseBody String uploadToLocal(@RequestParam("img") MultipartFile img, @RequestParam("file") MultipartFile file, @PathVariable("category") String category) {

        // get file names
        String sourceImgName = StringUtils.cleanPath(img.getOriginalFilename());
        String sourceFileName = StringUtils.cleanPath(file.getOriginalFilename());

        // target paths to assets
        Path targetImgPath = Paths.get("angular-app/src/assets/books/categories/" + category + "/img/" + sourceImgName);
        Path targetFilePath = Paths.get("angular-app/src/assets/books/categories/" + category + "/pdf/" + sourceFileName);

        try {
            Files.copy(file.getInputStream(), targetFilePath, StandardCopyOption.REPLACE_EXISTING);
            Files.copy(img.getInputStream(), targetImgPath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Success";
        
    }

    @PostMapping(path = "/files/upload/avatar")
    @CrossOrigin
    public @ResponseBody String uploadAvatarToLocal(@RequestParam("userAvatar") MultipartFile userAvatar){

        String sourceAvatarName = StringUtils.cleanPath(userAvatar.getOriginalFilename());

        Path targetAvatarPath = Paths.get("angular-app/src/assets/avatars/" + sourceAvatarName);

        try {
            Files.copy(userAvatar.getInputStream(), targetAvatarPath, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "Success";
    }
      
}
