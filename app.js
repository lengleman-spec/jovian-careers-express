const express = require("express");
const path = require("path");

const app = express();
/* Above code creates an express server */

app.use(express.static(path.join(__dirname, "public")));
/* Above code is saying: "Take everything that is there in the folder called 'public' and send it to the browser as is when requested". */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
/* Above code - The request object (req) is used to get data from the client. The reponse object (res) is used to send data back to the client */

/* __dirname is a built-in variable that means the current directory. __dirname and "index.hmtl" are then added together using .join( ). Then they are sent in the response (res). */

const port = process.env.PORT || 3000;
/* Tells it to use the port 3000 if no other ports have been specified. */

app.listen(port, () => {
  console.log("Server running on https://localhost:${port}");
});
/* Above code - Once you've created an Express application, you tell the app to LISTEN for requests. To start listening for requests, it needs a PORT. Different servers can occupy different ports, so one must be specified. */
