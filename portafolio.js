//registro.html
// Obtiene referencias a los elementos del formulario
let nombre = document.getElementById("Nombre");
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
// Array para almacenar los registros de usuarios
let registros = [];
// Función para registrar un nuevo usuario
function registrar() {
    // Verifica si los campos del formulario están completos
    if (nombre.value !== "" && correo.value !== "" && contraseña.value !== "") {
    
        // Crea un objeto con los datos del nuevo usuario es decir nombre, correo y contraseña seran los objetos donde el usuario 
        //puede guardar su informacion 
        let data = {
            nombre: nombre.value,
            correo: correo.value,
            contraseña: contraseña.value,
        };
        // Obtiene los registros existentes o en otro caso puede inicia un nuevo array si no hay ningun registro
        registros = JSON.parse(localStorage.getItem("registros")) || [];
        // Agrega el nuevo usuario al array de registros
        registros.push(data);
        // Almacena los registros actualizados en el almacenamiento local del navegador
        localStorage.setItem("registros", JSON.stringify(registros));
        // Muestra un mensaje al usuario para que sepa que su registro fue exitoso
        alert("Registro exitoso");
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "login.html";
        } else {
        // Si algún campo del formulario está vacío, muestra un mensaje de alerta para que sepa que debe llenar todo
        alert("Todos los campos son obligatorios");
    }
    //console.log(registrar)
}


// Función para iniciar sesión
function login() {
    // coloco este if para verificar si todos los campos del formulario están completos
    if (correo.value !== "" && contraseña.value !== "") {
        // Obtiene los registros de usuarios que estan almacenados en el localStorage
        registros = JSON.parse(localStorage.getItem("registros"));
        
        // Busca un usuario que ya exista con el correo y contraseña que el usuario colococado por el usuario
        let encontrado = registros.find(usuario => usuario.correo === correo.value && usuario.contraseña === contraseña.value);
        
        // Si se encuentra el usuario entonces se inicia sesión
        if (encontrado) {
            // Muestra un mensaje de inicio de sesiónpara que el usuario sepa que hizo todo muy bien 
            alert("¡Inicio de sesión exitoso!");
            
            // Almacena el usuario actual en el localStorage para que despues tambien pueda ser utilizado
            localStorage.setItem("usuario_actual", JSON.stringify(encontrado));
            
            // Redirige a la página de inicio
            window.location.href = "index.html";
        } else {
            // Si no se encuentra el usuario, muestra un mensaje de error
            alert("Correo o contraseña incorrectos");
            
            // Borra los campos de correo y contraseña
            correo.value = "";
            contraseña.value = "";
        }
    } else {
        // Si algún campo del formulario está vacío, muestra un mensaje de alerta
        alert("Todos los campos son obligatorios");
    }
}

//contacto.html
// Agrega un event listener al elemento con el id "contacto-link"
document.getElementById("contacto-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evita la acción predeterminada del enlace
  window.open(this.href, '_blank', 'width=100,height=100'); // Abre el enlace en una nueva ventana con los margenes que yo le ponga
});



//proyectos.html
// Agrega un event listener al botón de carga de archivos cuando se carga la página
document.getElementById('subirArchivo').addEventListener('click', uploadFile);
// Función para subir un archivo al servidor
function uploadFile() {
   // Obtiene el elemento de entrada de archivos
    let fileInput = document.getElementById('fileInput');
    // Obtiene el archivo seleccionado por el usuario
    let file = fileInput.files[0];
    // Verifica si se ha seleccionado un archivo
    if (!file) {
      // Si no se ha seleccionado ningún archivo, muestra un mensaje de alerta
        alert('Por favor selecciona un archivo.');
        return;
    }

    let formData = new FormData();
    formData.append('file', file);

    // Aquí debes escribir el código para enviar la solicitud al servidor
    
}


//Función para subir un archivo al servidor.
// Función para subir un archivo
function uploadFile() {
  // Aqui es para encontrar el elemento de entrada de archivos
  //'fileInput' es el ID del elemento de entrada de archivos en nuestro HTML.
  let fileInput = document.getElementById('fileInput');

  // para obtener el archivo que el usuario ha seleccionado almacenado en 'files'.
  let file = fileInput.files[0];
  if (!file) {
    // aqui si el usuario no ingresa nada le pide que ponga un archivo
      alert("por favor agregue un archivo");
      
      return;
  }
else{
  alert("exelente")
}

  // FormData se usa para enviar datos al servidor.
  let formData = new FormData();
  formData.append('file', file);

}