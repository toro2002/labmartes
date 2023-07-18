const mysql = require("mysql");
const express = require("express");
const port = 3000;
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "bdaprotila",
});

connection.connect(function (error) {
  if (error) {
    console.log("Error de conexion ", error.stack);
    return;
  }
  console.log("Conectado", connection.threadId);
});

app.get("/", (req, res) => {
  res.send("Holaaaa");
});

app.get("/controlventa", (req, res) => {
  let sql = "SELECT * FROM controlventa";
  connection.query(sql, function (error, results, fields) {
    if (error) {
      connection.end();
      throw error;
    }
    for (var i in results) {
      console.log(results[i].Encargado);
    }
    res.send("Consulta exitosa");
    return results;
  });
});

app.get("/crear", (req, res) => {
  campos = [];
  campos.push(req.query.IdVenta);
  campos.push(req.query.Encargado);
  campos.push(req.query.Fecha);
  campos.push(req.query.Pila);
  campos.push(req.query.Peso);
  campos.push(req.query.tilapia);
  campos.push(req.query.Precio);
  campos.push(req.query.Total);
  campos.push(req.query.Cliente);
  campos.push(req.query.Telefono);
  campos.push(req.query.MetodoPago);
  const insertar = `INSERT INTO controlventa (Encargado, Fecha, Pila, Peso, tilapia, Precio, Total, Cliente, Teléfono, MétodoPago) VALUES (${campos[1]}, ${campos[2]}, ${campos[3]}, ${campos[4]}, ${campos[5]}, ${campos[6]}, ${campos[7]}, ${campos[8]}, ${campos[9]}, ${campos[10]})`;

  connection.query(insertar, (err, fields) => {
    if (err) throw err;
  });
  res.send("Consulta exitosa");
});

app.listen(port, () => {
  console.log("Funciona");
});
/*
app.get("/controlventa", (req, res) => {
  let sql = "SELECT * FROM `controlventa`";
  connection.query(sql, function (error, results, fields) {
    if (error) {
      throw error;
    }
    for (var i in results) {
      console.log(results[i].Id);
    }
    res.send("Consulta exitosa");
    return results;
  });
});

connection.connect(function (error) {
  console.log("conectado", connection.threadId);
});

app.listen(port, () => {
  console.log("Funciona");
});

app.get("/crear", (req, res) => {
  campos = [];
  campos.push(req.query.Id);
  campos.push(req.query.Encargado);
  campos.push(req.query.Fecha);
  campos.push(req.query.Pila);
  campos.push(req.query.Peso);
  campos.push(req.query.tilapia);
  campos.push(req.query.Precio);
  campos.push(req.query.Total);
  campos.push(req.query.Cliente);
  campos.push(req.query.Telefono);
  campos.push(req.query.MetodoPago);
  const insertar = `INSERT INTO controlventa (Encargado, Fecha, Pila, Peso, tilapia, Precio, Total, Cliente, Teléfono, MétodoPago) VALUES (${campos[1]}, ${campos[2]}, ${campos[3]}, ${campos[4]}, ${campos[5]}, ${campos[6]}, ${campos[7]}, ${campos[8]}, ${campos[9]}, ${campos[10]})`;
  console.log(insertar);

  connection.query(insertar, (err, fields) => {
    if (err) throw err;
  });
  res.send("Consulta exitosa");
});
*/
/*const insertar = "INSERT INTO controlventas (Id, Encargado, Fecha, N°Pila, Peso, tilapia, Precio, Total, Cliente, Numero, MetodoPago) VALUES (1, 'Pedro22', 2023-06-07, 3, 500, 2, 1000, 2000, 'Luis', 80963289, 1111)"
    connection.query(insertar, (err,rows)=>{
        if(err) throw err
    })

const eliminar = "DELETE FROM controlventas WHERE Id = 1"
    connection.query(eliminar, (err,rows)=>{
        if(err) throw err
    })*/
/*
const actualizar = "UPDATE controlventas set Encargado = 'Pedro' WHERE Id = 0";
connection.query(actualizar, (err, rows) => {
  if (err) throw err;
});

connection.query("SELECT * from controlventas", (err, rows) => {
  if (err) throw err;
  console.log("Los datos de la tabla son");
  console.log(rows);
});
*/
