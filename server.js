import app from "./src/app/app";

import { PORT } from "./src/config";
import { createServer } from "http";
const server = createServer(app);
// server port
const port = PORT || 6000;
// listening server

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
