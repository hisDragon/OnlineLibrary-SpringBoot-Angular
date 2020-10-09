package com.backend.rest_api.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.backend.rest_api.dao.BookRepository;
import com.backend.rest_api.model.Author;
import com.backend.rest_api.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


interface IBookService{
    public abstract List<Book> getBooks();
    public abstract Optional<Book> getBookById(int bookId);
    public abstract Optional<Book> getBookByName(String bookName);

    public abstract Book saveBook(Book book);
    public abstract Book saveBook(Book book, Author author);
    public abstract Book saveBook(Book book, List<Author> authors);
}


@Service
public class BookService implements IBookService {
    
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return this.bookRepository.findAll();
    }

    @Override
    public Optional<Book> getBookById(int bookId){
        return this.bookRepository.findById(bookId);
    }

    @Override
    public Optional<Book> getBookByName(String bookName){
        return this.bookRepository.findByBookName(bookName);
    }

    // method to generate random integer for primary key
    private int generateRandId(){
        Random r = new Random(); // java.util.Random
        int bookId = 1000000 + r.nextInt(9000000); // random 7-digit integer

        // check if there is a book with that bookId
        List<Book> books = this.getBooks();
        for(Book book : books){
            if(book.getBookId() == bookId)
                bookId = 1000000 + r.nextInt(9000000); // if `bookId` already exists generate a new one
        }

        return bookId;
    }

    @Override
    public Book saveBook(Book book) {

        if(this.bookRepository.findByBookName(book.getBookName()).isPresent()){return null;} // book already present :(

        book.setBookId(this.generateRandId());
        this.bookRepository.save(book);

        return book;
    }

    @Override
    public Book saveBook(Book book, Author author) {

        if(this.bookRepository.findByBookName(book.getBookName()).isPresent()){
            // book present add author to it
            int id = this.bookRepository.findByBookName(book.getBookName()).get().getBookId(); // get the bookId
            Book bookToUpdate = this.bookRepository.getOne(id); // got the reference of the book

            // now update the authors
            bookToUpdate.getAuthors().add(author);
            this.bookRepository.save(bookToUpdate);

            return bookToUpdate;

        }else{
            // book not present create new bookId and add author to it
            book.getAuthors().add(author);
            this.saveBook(book); // code-reuse :)

            return book;
        }

    }

    @Override
    public Book saveBook(Book book, List<Author> authors) {
        if(this.bookRepository.findByBookName(book.getBookName()).isPresent()){
            // book present add author(s) to it
            int id = this.bookRepository.findByBookName(book.getBookName()).get().getBookId(); // get the bookId
            Book bookToUpdate = this.bookRepository.getOne(id); // got the reference of the book

            // add all authors
            bookToUpdate.getAuthors().addAll(authors);
            this.bookRepository.save(bookToUpdate);
            
            return bookToUpdate;

        }else{
            // book not present create new bookId and add author to it
            book.getAuthors().addAll(authors);
            this.saveBook(book); // code reuse :)

            return book;
        }
    }

}
