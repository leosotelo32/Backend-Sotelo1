import express from "express";

// Inicializamos express y la variable app contendrá todas las funciones de express

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/saludo", (req, res) => {
  res.send("Hola este es mi primer servidor con express");
});

app.get("/bienvenida", (req, res) => {
  res.send(
    `<h1 style="color:blue;">Bienvenido a mi primer servidor express!</h1>`
  );
});

app.get("/usuarios", (req, res) => {
  const user = {
    name: "Juan",
    age: 33,
    email: "juan@gmail.com",
  };
  res.send(user);
});

//request params
//peticiones GET con parámetros

app.get("/parametro/:dato", (req, res) => {
  const parametro = req.params.dato;

  res.send(`El parámetro recibido es: ${parametro}`);
});

//Peticiones con dos parámetros
app.get("/parametros/:nombre/:apellido", (req, res) => {
  const nombre = req.params.nombre;
  const apellido = req.params.apellido;

  res.send(`Bienvenido ${nombre} ${apellido}`);
});

const usuarios = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54 },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33 },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 21 },
];

app.get("/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  // Obtenemos el parámetro enviado por el cliente
  const { id } = req.params;
  // Buscamos el usuario en el array
  const usuario = usuarios.find((user) => user.id === Number(id));
  // Verificamos si el usuario existe, si no existe retornamos una respuesta con un error
  if (usuario) return res.send(`No existe el usuario con el id ${id}`);

  res.send(usuario);
});

// req.query

app.get("/queries", (req, res) => {
  const consulta = req.query;

  res.send(consulta);
});

app.get("/queries2", (req, res) => {
  const datos = {
    nombre,
    apellido,
    pais,
  };

  if (Object.values(datos).includes(undefined))
    return res.send("Debe ingresar todos los datos. Nombre, apellido y pais");
  res.send(`Persona ${nombre} ${apellido} y vive en ${pais}  `);
});

const usuarios2 = [
  { id: 1, nombre: "Miguel", apellido: "Castro", edad: 54, genero: "M" },
  { id: 2, nombre: "Juan", apellido: "Perez", edad: 33, genero: "M" },
  { id: 3, nombre: "Pepe", apellido: "Sapo", edad: 23, genero: "M" },
  { id: 3, nombre: "Maria", apellido: "Diaz", edad: 24, genero: "F" },
  { id: 3, nombre: "Emilia", apellido: "Gomez", edad: 25, genero: "F" },
  { id: 3, nombre: "Julio", apellido: "Lopez", edad: 26, genero: "F" },
];

app.get("/usuarios2", (req, res) => {
  // Obtenemos la query enviada por el cliente
  const { genero } = req.query;
  // Verificamos que el cliente envia la query en  el formato correcto. Sino le retornamos todos los usuarios sin filtrar.
  if (!genero || (genero !== "M" && genero !== "F")) return res.send(usuarios2);
  // En caso de que la query llegue bien respondemos al usuario con los usuarios filtrados.
  const usuariosFiltrados = usuarios2.filter(
    (usuario) => usuario.genero === genero
  );

  res.send(usuariosFiltrados);
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
