import BookStore from "../data/BookStore.ts";
import Book from "../model/Book.ts";
import CustomDataResponse from "../responses/CustomDataResponse.ts";
import CustomResponse from "../responses/CustomResponse.ts";
import Messages from "../constants/Messages.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export default class BookService {
  getAllBooks() {
    return new CustomDataResponse(true, "List Of Books", BookStore);
  }
  getBookById(id: string) {
    const book = BookStore.find((b) => b.id == id);

    if (!book) {
      return new CustomResponse(
        false,
        Messages.NO_BOOK_FOUND.concat(id),
      );
    }
    return new CustomDataResponse(true, "Get Book By Id", book);
  }
  addBook(payload: any) {
    const book = new Book(v4.generate(), payload.name, payload.author);
    BookStore.push(book);

    return new CustomResponse(true, Messages.BOOK_ADDED);
  }
  deleteBookById(id: string) {
    const book = BookStore.find((b) => b.id == id);

    if (!book) {
      return new CustomResponse(
        false,
        Messages.NO_BOOK_FOUND.concat(id),
      );
    }

    BookStore.forEach((book, index) => {
      if (book.id == id) {
        BookStore.splice(index, 1);
      }
    });
    return new CustomResponse(true, Messages.BOOK_DELETED);
  }
  updateBookById(id: string, payload: any) {
    const book = BookStore.find((b) => b.id == id);

    if (!book) {
      return new CustomResponse(
        false,
        Messages.NO_BOOK_FOUND + id,
      );
    }

    book.name = payload.name;
    book.author = payload.author;
    return new CustomDataResponse(true, Messages.BOOK_UPDATED, book);
  }
}
