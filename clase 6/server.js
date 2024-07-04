import http from "http";

const server = http.createServer((request, response) => {
  response.end("LEITOOOO");
});

server.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
