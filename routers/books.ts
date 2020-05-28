import { Router } from "https://deno.land/x/oak/router.ts";
import BookController from "../controllers/BookController.ts";
import BookService from "../service/BookService.ts";

const router = new Router();

const bookController: BookController = new BookController(new BookService());

router.get("/books", bookController.getAllBooks);
router.post("/books", bookController.addBook);
router.get("/book/:id", bookController.getBookById);
router.put("/book/:id", bookController.updateBookById);
router.delete("/book/:id", bookController.deleteBookById);
export default router;
