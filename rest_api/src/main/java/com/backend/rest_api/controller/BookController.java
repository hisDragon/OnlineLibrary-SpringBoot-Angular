package com.backend.rest_api.controller;

import java.util.List;
import java.util.Optional;


import com.backend.rest_api.model.Book;
import com.backend.rest_api.service.BookService;

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
public class BookController {

    @Autowired
    private BookService bookService;

    //////////////////////////////// GET ////////////////////////////////

    @GetMapping(path = "/books/all")
    @CrossOrigin
    public @ResponseBody List<Book> getBooks(){
        return this.bookService.getBooks();
    }

    @GetMapping(path = "/books/id/{bookId}")
    @CrossOrigin
    public @ResponseBody Optional<Book> getBook(@PathVariable("bookId") int bookId ){
        return this.bookService.getBookById(bookId);
    }

    @GetMapping(path = "/books/name/{bookName}")
    @CrossOrigin
    public @ResponseBody Optional<Book> getBook(@PathVariable("bookName") String bookName ){
        return this.bookService.getBookByName(bookName);
    }

    @GetMapping(path = "/books/category/{bookCategory}")
    @CrossOrigin
    public @ResponseBody List<Book> getBooksByCategory(@PathVariable("bookCategory") String bookCategory){
        return this.bookService.getBooksByCategory(bookCategory);
    }

    // get all by list of id
    @GetMapping(path = "/books/ids")
    @CrossOrigin
    public @ResponseBody List<Book> getAllByIds(@RequestParam(name = "id") List<Integer> ids){
        return this.bookService.getBooksByIds(ids);
    }

    ////////////////////////////// GET END //////////////////////////////


    /////////////////////////////// POST ////////////////////////////////

    @PostMapping(path = "/books/addBook", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public @ResponseBody Book postBook(@RequestBody Book book){
        return this.bookService.saveBook(book);
    }

    ///////////////////////////// POST END //////////////////////////////

    
    //////////////////////////////// PUT ////////////////////////////////

    ////////////////////////////// PUT END //////////////////////////////


    ////////////////////////////// DELETE ///////////////////////////////

    //////////////////////////// DELETE END /////////////////////////////

}
