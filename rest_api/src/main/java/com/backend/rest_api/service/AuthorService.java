package com.backend.rest_api.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import com.backend.rest_api.dao.AuthorRepository;
import com.backend.rest_api.model.Author;
import com.backend.rest_api.model.Book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

interface IAuthorService {
    public abstract List<Author> getAuthors();
    public abstract Optional<Author> getAuthorById(int authorId);
    public abstract Optional<Author> getAuthorByName(String authorName);

    public abstract Author saveAuthor(Author author);
    public abstract Author saveAuthor(Author author, Book book);
    public abstract Author saveAuthor(Author author, List<Book> books);
}

@Service
public class AuthorService implements IAuthorService{

    @Autowired
    private AuthorRepository authorRepository;

    @Override
    public List<Author> getAuthors() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> getAuthorById(int authorId){
        return this.authorRepository.findById(authorId);
    }

    @Override
    public Optional<Author> getAuthorByName(String authorName){
        return this.authorRepository.findByAuthorName(authorName);
    }

    // method to generate random integer for primary key
    private int generateRandId(){
        Random r = new Random(); // java.util.Random
        int authorId = 10000 + r.nextInt(90000); // random 5-digit integer

        // check if there is an author with that authorId
        List<Author> authors = this.getAuthors();
        for(Author author : authors){
            if(author.getAuthorId() == authorId)
                authorId = 10000 + r.nextInt(90000); // if `authorId` already exists generate a new one
        }

        return authorId;
    }

    @Override
    public Author saveAuthor(Author author) {
        if(this.authorRepository.findByAuthorName(author.getAuthorName()).isPresent()){return null;} // author already present

        author.setAuthorId(this.generateRandId()); // set its ID
        this.authorRepository.save(author);

        return author;
    }

    @Override
    public Author saveAuthor(Author author, Book book) {
        if(this.authorRepository.findByAuthorName(author.getAuthorName()).isPresent()){
            // author already present
            int id = this.authorRepository.findByAuthorName(author.getAuthorName()).get().getAuthorId(); // get the bookId
            Author authorToUpdate = this.authorRepository.getOne(id); // got the reference of the book

            // now update the authors
            authorToUpdate.getBooks().add(book);
            this.authorRepository.save(authorToUpdate);

            return authorToUpdate;

        }else{
            // author not present
            author.getBooks().add(book);
            this.saveAuthor(author); // code reuse :)

            return author;
        }
    }

    @Override
    public Author saveAuthor(Author author, List<Book> books) {
        if(this.authorRepository.findByAuthorName(author.getAuthorName()).isPresent()){
            // author already present
            int id = this.authorRepository.findByAuthorName(author.getAuthorName()).get().getAuthorId(); // get the bookId
            Author authorToUpdate = this.authorRepository.getOne(id); // got the reference of the book

            // now update the authors
            authorToUpdate.getBooks().addAll(books);
            this.authorRepository.save(authorToUpdate);

            return authorToUpdate;

        }else{
            // author not present
            author.getBooks().addAll(books);
            this.saveAuthor(author);

            return author;
        }
    }

}
