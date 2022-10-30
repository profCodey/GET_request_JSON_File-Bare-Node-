const http = require("http");

const host = "localhost";
const port = 8080;

const data = {
  slackUsername: "Demilade Otunaiya",
  backend: true,
  age: 26,
  bio: "Software Engineer with over three years of experience in full-stack development and leading product cycle from conception to completion. Guided a team of 5-15 members through 5+ product launches at a recent experience in a high-growth technology startup. Passionate about building products that solve real-world problems and creating a positive impact on the world.",
};

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(data, null, 3));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});



