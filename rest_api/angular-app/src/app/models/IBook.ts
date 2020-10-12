import { IAuthor } from './IAuthor';

export interface IBook{
    bookId: number,
    bookName: string,
    bookPath: string,
    bookImagePath: string,
    bookCategory: string,
    authors: IAuthor[]
}