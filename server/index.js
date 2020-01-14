require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
// Controllers
const ac = require("./controllers/authController")
const pc = require("./controllers/postsController")
// Dotenv
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
// Middleware
app.use(express.json());

// Session
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

// Database Connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected!")
})

// De-structured controllers
const { user, registerUser, loginUser, logoutUser } = ac;
const { allPosts, addPost, editPost, deletePost, allPostsByCategoryName } = pc;
// Auth Endpoints
app.get("/auth/user", user);
app.post("/auth/register", registerUser);
app.post("/auth/login", loginUser);
app.get("/auth/logout", logoutUser);

// Posts Endpoints
app.get("/api/posts", allPosts);
app.post("/api/posts", addPost);
app.put("/api/posts/:post_id", editPost);
app.delete("/api/posts/:post_id", deletePost);
app.get("/api/posts/:category_name", allPostsByCategoryName)

app.listen(SERVER_PORT, () => {
  console.log(`LOFI RADIO STATION #: ${SERVER_PORT}`)
})
