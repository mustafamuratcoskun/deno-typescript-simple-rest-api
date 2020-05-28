import { Application } from "https://deno.land/x/oak/mod.ts";

import bookRouter from "./routers/books.ts";

const PORT = 3000;

const app = new Application();

app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods());

await app.listen({ port: PORT });
