const http = require("http");
const server = http.createServer(function(request, response) {
  response.write("OK");
  response.end();
});
server.listen(3001);