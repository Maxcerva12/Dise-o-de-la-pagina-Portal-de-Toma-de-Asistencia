function iniciarcontrol(){
    let sectionSeleccionarasistencia = document.getElementById("formulario_de_asistencia");
    sectionSeleccionarasistencia.style.display = "none"

    let sectionSeleccionarlogi = document.getElementById("Logi");
    sectionSeleccionarlogi.style.display = "none"

    let botonStuden = document.getElementById("Seleccionar-estudem")
    botonStuden.addEventListener("click", seleccionarFormulario)

    let botonadmin = document.getElementById("Seleccionar-admin")
    botonadmin.addEventListener("click", seleccionarlogin)

    let BotonReiniciar = document.getElementById("boton-vover");
    BotonReiniciar.addEventListener("click", pantallaAnterior);

}

function seleccionarFormulario() {
    let sectionSeleccionarasistencia = document.getElementById("formulario_de_asistencia");
    sectionSeleccionarasistencia.style.display = "block";
    let sectionSeleccionaradmin = document.getElementById("Logi");
    sectionSeleccionaradmin.style.display = "none";
    document.getElementById("subtitulo").style.display = "none"
    document.getElementById("Seleccionar-estudem").style.display = "none";
    document.getElementById("Seleccionar-admin").style.display = "none";
    document.getElementById("imagencomputo").style.display = "none";
    document.getElementById("Formas").style.display = "none";
  }


function seleccionarlogin() {
    let sectionSeleccionarasistencia = document.getElementById("formulario_de_asistencia");
    sectionSeleccionarasistencia.style.display = "none";
    let sectionSeleccionaradmin = document.getElementById("Logi");
    sectionSeleccionaradmin.style.display = "block";
    document.getElementById("subtitulo").style.display = "none"
    document.getElementById("Seleccionar-estudem").style.display = "none";
    document.getElementById("Seleccionar-admin").style.display = "none";
    document.getElementById("imagencomputo").style.display = "block";
    document.getElementById("Formas").style.display = "block";
  }

function pantallaAnterior(){

    location.reload();
}


  

  window.addEventListener("DOMContentLoaded", iniciarcontrol )

  // Importar la biblioteca de MySQL
const mysql = require('mysql');

// Configurar las credenciales de la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_tu_base_de_datos'
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ' + error.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Obtener los valores ingresados por el usuario cuando se envía el formulario
const formulario = document.getElementById('loginform');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  // Buscar las credenciales de inicio de sesión del usuario en la base de datos
  const sql = `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND contrasena = '${contrasena}'`;
  connection.query(sql, (error, resultados) => {
    if (error) {
      console.error('Error al buscar las credenciales de inicio de sesión: ' + error.stack);
      return;
    }

    // Verificar si se encontraron las credenciales de inicio de sesión
    if (resultados.length > 0) {
      console.log('Inicio de sesión exitoso');
      // Redirigir al usuario a la página de inicio de sesión exitoso
    } else {
      console.log('Credenciales de inicio de sesión incorrectas');
      // Mostrar un mensaje de error al usuario
    }
  });
});

// Cerrar la conexión a la base de datos cuando hayas terminado
connection.end();