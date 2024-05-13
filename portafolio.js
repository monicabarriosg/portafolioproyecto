//registro.html
// Obtiene referencias a los elementos del formulario
let nombre = document.getElementById("Nombre");
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let button = document.getElementById("submitBtn");
// Agrega un evento de click al botón
button.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente
  // Llama a la función para validar el formulario
  if (validarFormulario()) {
    const data = {
      nombre: nombre.value,
      correo: correo.value,
      contraseña: contraseña.value,
    };
    // Obtiene los registros existentes o inicializa un nuevo array si no hay ninguno
    let registros = JSON.parse(localStorage.getItem("registros")) || [];
    // Agrega el nuevo usuario al array de registros
    registros.push(data);
    // Almacena los registros actualizados en el almacenamiento local del navegador
    localStorage.setItem("registros", JSON.stringify(registros));
    // Muestra un mensaje al usuario para que sepa que su registro fue exitoso
    alert("Registro exitoso");
    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "login.html";
  }
});
// Función para validar el formulario
function validarFormulario() {
  // Verifica si los campos del formulario están completos
  if (nombre.value === "" || correo.value === "" || contraseña.value === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }
  // Si todos los campos están completos, devuelve true
  return true;
}
// Función para iniciar sesión
function login() {
  // Llama a la función para validar el formulario
  if (validarFormulario()) {
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    if (correo !== "" && contraseña !== "") {
      let registros = JSON.parse(localStorage.getItem("registros"));
      let encontrado = registros.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
      if (encontrado) {
        alert("¡Inicio de sesión exitoso!");
        localStorage.setItem("usuario_actual", JSON.stringify(encontrado));
        window.location.href = "index.html";
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  }
  //la validacion del formulario es para que el usuario tenga una condicion, y esta se va a encargar que el usuario 
  //No se salte ninguna parte.
}
// Función para validar el formulario
function validarFormulario() {
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  if (correo === "" || contraseña === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }
  return true;
}
//contacto.html
// Agrega un event listener al elemento con el id "contacto-link"
document.getElementById("contacto-link").addEventListener("click", function(event) {
  event.preventDefault(); // Evita la acción predeterminada del enlace
  window.open(this.href, '_blank', 'width=100,height=100'); // Abre el enlace en una nueva ventana con los margenes que yo le ponga
});





//proyectos.html
// Agrega un event listener al botón de carga de archivos cuando se carga la página
let imageUploader = document.getElementById("imageUploader");
let subirButton = document.getElementById("subir");
let logoutButton = document.getElementById("logout");
let galeria = document.getElementById("galeria");
let titlulos = document.getElementById("titulos");
let tituloImagen = document.getElementById("tituloImagen");

// evento del clic para subir la imagen
subirButton.addEventListener("click", function (){
  const archivo = imageUploader.files[0];

  if(archivo){
    // para leer archivo como base 64
    const reader = new FileReader();
    reader.onload = function(e) {

    // eso crea el elemento de imagen
    const imagen = document.createElement("img");
    imagen.src = e.target.result;
    imagen.classList.add("imagen")

    // para agregar una imagen a la galeria 
    galeria.appendChild(imagen);

    // evento de click para hacer zoom a la imagen
    imagen.addEventListener("click", function(){
      hacerZoom(imagen.src)
    })
  }

  reader.readAsDataURL(archivo);
  }
})

// evento de clic para cerrar sesion 
logoutButton.addEventListener("click", function(){

  // limpiargaleria
  galeria.innerHTML = ""
})

//proyecto parte de escribir texto 
localStorage.setItem("nombre", "dato");

    // leer datos
    var miDato = localStorage.getItem("nombre");
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