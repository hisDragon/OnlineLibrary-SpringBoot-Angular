package com.backend.rest_api.controller;

import java.util.List;
import java.util.Optional;

import com.backend.rest_api.model.Author;
import com.backend.rest_api.service.AuthorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorController {
    
    @Autowired
    private AuthorService authorService;

    //////////////////////////////// GET ////////////////////////////////

    @GetMapping(path = "/authors/all")
    @CrossOrigin
    public @ResponseBody List<Author> getAuthors(){
        return this.authorService.getAuthors();
    }

    @GetMapping(path = "/authors/id/{authorId}")
    @CrossOrigin
    public @ResponseBody Optional<Author> getAuthor(@PathVariable("authorId") int authorId){
        return this.authorService.getAuthorById(authorId);
    }

    @GetMapping(path = "/authors/name/{authorName}")
    @CrossOrigin
    public @ResponseBody Optional<Author> getAuthor(@PathVariable("authorName") String authorName){
        return this.authorService.getAuthorByName(authorName);
    }

    ////////////////////////////// GET END //////////////////////////////


    /////////////////////////////// POST ////////////////////////////////

    @PostMapping(path = "/authors/addAuthor")
    @CrossOrigin
    public @ResponseBody Author postBook(@RequestBody Author author){
        return this.authorService.saveAuthor(author);
    }

    ///////////////////////////// POST END //////////////////////////////

    
    //////////////////////////////// PUT ////////////////////////////////

    ////////////////////////////// PUT END //////////////////////////////


    ////////////////////////////// DELETE ///////////////////////////////

    //////////////////////////// DELETE END /////////////////////////////

}
