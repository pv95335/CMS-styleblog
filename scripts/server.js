// Dependecies
// ====================================================================
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

// Setup for Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Setup for Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Setup for sessions
app.use(
  session({
    secret: "bloggers-post",
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
// ====================================================================

app.get("/", (req, res) => {
  if (req.session.allPosts) {
  }
});

// Start Server
// ====================================================================
app.listen(PORT, () => {
  console.log("APP listening on PORT " + PORT);
});
