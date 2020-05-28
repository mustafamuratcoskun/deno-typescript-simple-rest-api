import BookService from "../service/BookService.ts";

export default class BookController {
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }
  getAllBooks = (context: any) => {
    const { response }: { response: any } = context;

    let apiResponse = this.bookService.getAllBooks();

    response.body = apiResponse;
  };

  addBook = async (context: any) => {
    const { request, response }: { request: any; response: any } = context;
    const { name, author }: { name: String; author: String } =
      (await request.body()).value;

    const payload = {
      name,
      author,
    };
    let apiResponse = this.bookService.addBook(payload);

    response.status = 201;
    response.body = apiResponse;

    return response;
  };
  getBookById = (context: any) => {
    const { params, response }: { params: any; response: any } = context;

    let apiResponse = this.bookService.getBookById(params.id);

    if (!apiResponse.success) {
      response.status = 404;
    }
    response.body = apiResponse;

    return response;
  };
  updateBookById = async (context: any) => {
    const { params, request, response }: {
      params: any;
      request: any;
      response: any;
    } = context;
    const { name, author }: { name: String; author: String } =
      (await request.body()).value;

    const payload = {
      name,
      author,
    };

    let apiResponse = this.bookService.updateBookById(params.id, payload);

    if (!apiResponse.success) {
      response.status = 404;
    }

    response.body = apiResponse;
    return response;
  };

  deleteBookById = (context: any) => {
    const { params, response }: {
      params: any;
      response: any;
    } = context;

    let apiResponse = this.bookService.deleteBookById(params.id);
    if (!apiResponse.success) {
      response.status = 404;
    }
    response.body = apiResponse;

    return response;
  };
}
