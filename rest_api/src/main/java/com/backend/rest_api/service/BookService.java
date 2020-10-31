package com.backend.rest_api.service;

import java.util.Collections;
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
    public abstract List<Book> getBooksByCategory(String bookCategory);

    public abstract Book saveBook(Book book);
    // public abstract Book saveBook(Book book, Author author);
    // public abstract Book saveBook(Book book, List<Author> authors);
}


@Service
public class BookService implements IBookService {
    
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorService authorService; // checking if new & saving authors if they are new

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

    @Override
    public List<Book> getBooksByCategory(String bookCategory){
        return this.bookRepository.findByBookCategory(bookCategory);
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

    /**
     *  CONFUSING LOGIC AHEAD BE-CAREFUL :)
     * @author Nishanth
     * */ 

    @Override
    public Book saveBook(Book book) {

        boolean bookNamePresent = this.bookRepository.findByBookName(book.getBookName()).isPresent();
        boolean bookAuthorsListEmpty = book.getAuthors().isEmpty();

        if( bookNamePresent && bookAuthorsListEmpty ){
            // 0 0
            // old book without authors :(
            // but update existing values
            Book bookToUpdate = this.bookRepository.findById(book.getBookId()).get();
            bookToUpdate.setBorrowerId(book.getBorrowerId());

            return this.bookRepository.save(bookToUpdate);
        }
        else if( !bookNamePresent && bookAuthorsListEmpty ){
            // 1 0
            // new book without authors
            book.setBookId(this.generateRandId());
            return this.bookRepository.save(book);

        }else if( bookNamePresent && !bookAuthorsListEmpty ){
            // 0 1
            // old book with authors

            Book bookToUpdate = new Book(this.bookRepository.findByBookName(book.getBookName()).get().getBookId(),
                                         book.getBookName(),
                                         book.getBookPath(),
                                         book.getBookImagePath(), 
                                         book.getBookCategory(),
                                         this.bookRepository.findByBookName(book.getBookName()).get().getAuthors()); // creating new Book object because of java.util.ConcurrentModificationException

            // // first add all existing authors to the new bookToUpdate object
            // bookToUpdate.getAuthors().addAll( this.bookRepository.findById(bookId).get().getAuthors() );

            int bookId = this.bookRepository.findByBookName(book.getBookName()).get().getBookId(); // get bookId to update existing book instead of creating a new one
            book.setBookId(bookId);

            // check if the authors given for that book are already present
            for(Author author: book.getAuthors()){

                if( !authorService.getAuthorByName(author.getAuthorName()).isPresent() ){
                    // author name not present .. first the author needs to be registered
                    // save the new author
                    author = authorService.saveAuthor(author); // saving it back into author ref because it's ID is changed
                    if(author == null){
                        System.out.println("EEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR"); // Check the problem this line must not execute
                        return null;
                    }
                    bookToUpdate.getAuthors().add(author); // add it to existing book object
                }else{
                    // author present in the DataBase now check if the book already has the authors
                    author.setAuthorId(this.authorService.getAuthorByName(author.getAuthorName()).get().getAuthorId()); // setting authorId
                    // checking if the book already contains the author
                    if(this.bookRepository.findById(bookId).get().getAuthors().contains(author)){
                        // this book already has the author in it's list so do nothing
                        continue; // continue because adding author is a waste as it is already present
                    }else{
                        // this book does not have the author in it's list
                        // so add it to the book ref obj
                        bookToUpdate.getAuthors().add(author);
                    } // embedded if-else
                } // if-else

            } // end for-each

            // save the book into DataBase
            return this.bookRepository.save(bookToUpdate);

        }else if( !bookNamePresent && !bookAuthorsListEmpty ){
            // 1 1
            // new book new authors
            
            // first generate new bookId
            book.setBookId(this.generateRandId());

            Book bookToUpdate = new Book(book.getBookId(),
                                         book.getBookName(),
                                         book.getBookPath(),
                                         book.getBookImagePath(), 
                                         book.getBookCategory()); // creating new Book object because of java.util.ConcurrentModificationException

            // add all books
            // check if the authors are in the authors table, if they are not first add authors to the table
            for( Author author: book.getAuthors() ){
                if( this.authorService.getAuthorByName(author.getAuthorName()).isPresent() ){
                    // author is present in the database
                    // set authorId Locally
                    author.setAuthorId( this.authorService.getAuthorByName(author.getAuthorName()).get().getAuthorId() );
                    bookToUpdate.getAuthors().add(author);
                }else{
                    // author not present in the DataBase
                    // add the author first
                    author = this.authorService.saveAuthor(author);
                    if(author == null){
                        System.out.println("EEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRR"); // Check the problem this line must not execute
                        return null;
                    }

                    bookToUpdate.getAuthors().add(author);
                }
            }

            // save it into the DataBase
            return this.bookRepository.save(bookToUpdate);
        }else{
            // ? ?
            // I don't know why this case would occur but anyway would be easier to handle errors

            return new Book(0, "<NOT_SURE>", "", "", "", Collections.emptyList());
        }

    }

    /* I think we don't need the bottom part at least for now */

    // @Override
    // public Book saveBook(Book book, Author author) {

    //     if(this.bookRepository.findByBookName(book.getBookName()).isPresent()){
    //         // book present add author to it
    //         int id = this.bookRepository.findByBookName(book.getBookName()).get().getBookId(); // get the bookId
    //         Book bookToUpdate = this.bookRepository.getOne(id); // got the reference of the book

    //         // now update the authors
    //         bookToUpdate.getAuthors().add(author);
    //         this.bookRepository.save(bookToUpdate);

    //         return bookToUpdate;

    //     }else{
    //         // book not present create new bookId and add author to it
    //         book.getAuthors().add(author);
    //         this.saveBook(book); // code-reuse :)

    //         return book;
    //     }

    // }

    // @Override
    // public Book saveBook(Book book, List<Author> authors) {
    //     if(this.bookRepository.findByBookName(book.getBookName()).isPresent()){
    //         // book present add author(s) to it
    //         int id = this.bookRepository.findByBookName(book.getBookName()).get().getBookId(); // get the bookId
    //         Book bookToUpdate = this.bookRepository.getOne(id); // got the reference of the book

    //         // add all authors
    //         bookToUpdate.getAuthors().addAll(authors);
    //         this.bookRepository.save(bookToUpdate);
            
    //         return bookToUpdate;

    //     }else{
    //         // book not present create new bookId and add author to it
    //         book.getAuthors().addAll(authors);
    //         this.saveBook(book); // code reuse :)

    //         return book;
    //     }
    // }

}
