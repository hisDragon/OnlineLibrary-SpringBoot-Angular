import { IBook } from './IBook';

export interface IAuthor{
    authorId: number,
    authorName: string,
    books: IBook[]
}