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
        // Crea un objeto con los datos del nuevo usuario
        let data = {
            nombre: nombre.value,
            correo: correo.value,
            contraseña: contraseña.value,
        };

        // Obtiene los registros existentes o inicializa un nuevo array si no hay registros
        registros = JSON.parse(localStorage.getItem("registros")) || [];
        
        // Agrega el nuevo usuario al array de registros
        registros.push(data);
        
        // Almacena los registros actualizados en el almacenamiento local del navegador
        localStorage.setItem("registros", JSON.stringify(registros));
        
        // Muestra un mensaje de registro exitoso
        alert("Registro exitoso");
        
        // Redirige al usuario a la página de inicio de sesión
        window.location.href = "login.html";
    } else {
        // Si algún campo del formulario está vacío, muestra un mensaje de alerta
        alert("Todos los campos son obligatorios");
    }
}

// Función para iniciar sesión
function login() {
    // Verifica si los campos del formulario están completos
    if (correo.value !== "" && contraseña.value !== "") {
        // Obtiene los registros de usuarios almacenados en el localStorage
        registros = JSON.parse(localStorage.getItem("registros"));
        
        // Busca un usuario con el correo y contraseña proporcionados
        let encontrado = registros.find(usuario => usuario.correo === correo.value && usuario.contraseña === contraseña.value);
        
        // Si se encuentra el usuario, se inicia sesión
        if (encontrado) {
            // Muestra un mensaje de inicio de sesión exitoso
            alert("¡Inicio de sesión exitoso!");
            
            // Almacena el usuario actual en el localStorage para su uso posterior
            localStorage.setItem("usuario_actual", JSON.stringify(encontrado));
            
            // Redirige al usuario a la página de inicio
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
