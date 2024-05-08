const nombre = document.getElementById("Nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const button = document.getElementById("button");

button.addEventListener("click",  (e) =>{
  e.preventDefault();
  // Verificar si los campos están vacíos
  if (nombre.value.trim() === '' || correo.value.trim() === '' || contraseña.value.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return; // Detiene la ejecución de la función si los campos están vacíos
  }
    const data = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value,
        
    };
      localStorage.setItem("nombre", data.nombre);
      localStorage.setItem("correo", data.correo);
      localStorage.setItem("contraseña", data.contraseña);
      window.location.href = "index.html";
})
const Nombre = localStorage.getItem("nombre");
const correo1 = localStorage.getItem("correo");
const contraseña1 = localStorage.getItem("contraseña");

// Mostrar los datos en pantalla
// Mostrar los datos en pantalla




