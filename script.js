///ES PARA CERRAR Y ABRIR EL MENÚ DE LA IZQUIERDA
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
//------------------------------------------------------------
obtenerFecha();
//PARA AÑADIR UNA VENTA---------------------------------------
function obtenerFecha() {
  var fecha_hoy = new Date();
  var mes = (fecha_hoy.getMonth() + 1).toString();
  if (mes.length <= 1) {
    mes = "0" + mes;
  }

  var dia = fecha_hoy.getDate().toString();
  if (dia.length <= 1) {
    dia = "0" + dia;
  }
  fecha_actual = fecha_hoy.getFullYear() + "-" + mes + "-" + dia;
  var fechaConFormato = moment(fecha_actual);
  var fecha = fechaConFormato.format("DD-MM-YYYY");
}

//--------------------------------------------------------------

//EVENTO PARA ABRIR EL MODAL
var addIcon = document.getElementById("add");
addIcon.addEventListener("click", function () {
  document.getElementById("formu-modal").style.display = "flex";
});

//EVENTO PARA CERRAR EL MODAL

var closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
  document.getElementById("formu-modal").style.display = "none";
});

//FUNCIÓN PARA VALIDAR DATOS AL AGREGAR

function validarCampos() {
  peso = document.getElementById("peso").value;
  tilapia = document.getElementById("tilapia").value;
  precio = document.getElementById("precio").value;
  total = document.getElementById("total").value;
  nomCliente = document.getElementById("nomCliente").value;
  numero = document.getElementById("numero").value;

  if (
    !validarEncargado ||
    !validarPila ||
    peso.toString == 0 ||
    tilapia.toString == 0 ||
    precio.toString == 0 ||
    total.toString == 0 ||
    nomCliente.toString == 0 ||
    numero.toString == 0
  ) {
    alert("Error campos incompletos");
  } else {
    alert("ok");
    url = `http://localhost:3000/crear?Encargado=${encargadoSeleccionado}&Fecha=${fecha}&Pila=${pilaSeleccionada}&Peso=${peso}&Tilapia=${tilapia}&Precio=${precio}&Total=${total}&Cliente=${nomCliente}&Télefono=${numero}&MétodoPago=${metodoSeleccionado}`;
    addVenta(url);
  }
}

function addVenta(url) {
  alert("ok2");

  fetch(url, {
    method: "get",
  })
    .then((resp) => resp.json())
    .then((datos) => {
      console.log(datos);
    });
}

//SELECT DE ENCARGADO CON EVENTOS DE CAMBIO
var validarEncargado = false;
var encargadoSeleccionado;
var encargado = document.getElementById("encargado");
encargado.addEventListener("change", function () {
  encargadoSeleccionado = encargado.options[encargado.selectedIndex].text;
  validarEncargado = true;
});

//SELECT DE PILA CON EVENTOS DE CAMBIO
var validarPila = false;
var pilaSeleccionada;
var optionPila = document.getElementById("menupila");
optionPila.addEventListener("change", function () {
  pilaSeleccionada = optionPila.options[optionPila.selectedIndex].text;
  validarPila = true;
});

//SELECT DE FORMA DE PAGO CON EVENTO DE CAMBIO

var validarMetodoPago = false;
var metodoSeleccionado;
var optionPago = document.getElementById("pago");
optionPago.addEventListener("change", function () {
  metodoSeleccionado = optionPago.options[optionPago.selectedIndex].text;
  validarMetodoPago = true;
});

//---------------------------------------------------------------------------
