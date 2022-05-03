const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// GET Route for homepage
app.get("/", (req, res) => res.json({ hello: "world" }));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
