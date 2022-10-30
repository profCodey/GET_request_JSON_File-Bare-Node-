const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8081;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// const data = {
//   slackUsername: "Demilade Otunaiya",
//   backend: true,
//   age: 26,
//   bio: "Software Engineer with over three years of experience in full-stack development and leading product cycle from conception to completion. Guided a team of 5-15 members through 5+ product launches at a recent experience in a high-growth technology startup. Passionate about building products that solve real-world problems and creating a positive impact on the world.",
// };

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "Demilade Otunaiya",
    backend: true,
    age: 26,
    bio: "Software Engineer with over three years of experience in full-stack development and leading product cycle from conception to completion. Guided a team of 5-15 members through 5+ product launches at a recent experience in a high-growth technology startup. Passionate about building products that solve real-world problems and creating a positive impact on the world.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
