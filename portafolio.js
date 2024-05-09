const nombre = document.getElementById("Nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

button.addEventListener("click",  (e) =>{ // este simbolo => es funcion flecha
  e.preventDefault(); //para prevenir errores
  // Verificar si los campos están vacíos
  if (nombre.value.trim() === '' || correo.value.trim() === '' || contraseña.value.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return; // Detiene la ejecución de la función si los campos están vacíos
  }
  else{
    alert("bienvenido")
    window.location.href = "index.html";
  }
    const data = {
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña.value,
    //data es un objeto
    };
      localStorage.setItem("nombre", data.nombre);
      localStorage.setItem("correo", data.correo);
      localStorage.setItem("contraseña", data.contraseña);
      window.location.href = "index.html";//es para que reedirija al html que yo quiera
})
const Nombre = localStorage.getItem("nombre");
const correo1 = localStorage.getItem("correo");
const contraseña1 = localStorage.getItem("contraseña");

// Mostrar los datos en pantalla




