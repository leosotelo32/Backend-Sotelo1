import fs from "fs";

let path = "./prueba3.txt";

const createFile = (path, content1, content2) => {
  fs.writeFileSync(path, content1);

  //Proceso de archivo

  // Chequeamos que el archivo exista

  if (fs.existsSync(path)) {
    // True o false
    // En caso que el archivo exista
    // leer el archivo

    let message = fs.readFileSync(path, "utf-8");
    console.log(`Mensaje ${message}`);

    // Agregar información al archivo
    // Colocar un texto al final de un archivo

    fs.appendFileSync(path, `\n${content2}`);
    message = fs.readFileSync(path, "utf-8");
    console.log(`Mensaje ${message}`);

    //Eliminamos el archivo

    // fs.unlinkSync(path);
  }
};
createFile(path, "- Ir a caminar", "-Ir a corres");
