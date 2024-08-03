const http = require("http")

const server = http.createServer(function (request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  )
  // response.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "X-Requested-With,content-type"
  // )
  response.end(Date.now().toString())
})
server.listen(3030, function () {
  console.log("Сервер запущен по адресу http://localhost:3030")
})
