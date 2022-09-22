/* let loginOrRegister = prompt(`Hola! Soy LT, para seguir accediendo a la página debes ingresar a tu cuenta o, si no tienes una, crearla. Ingresa "Login" (si tienes una cuenta), o "Register" (si no la tienes).`); */
let users = [
    {nombre: "Lautaro Torrente", edad: 16, direccion: "9 de Julio", email: "lautorrente06@gmail.com"},
    {nombre : crearUserNombre, edad: crearUserEdad, direccion: crearUserDireccion, email: crearUserEmail}
];
class User {
    constructor (nombre, edad, direccion, email) {
        this.nombre = nombre;        
        this.edad = edad;
        this.direccion = direccion;
        this.email = email;   
    }
}

/* if (loginOrRegister == "Login") {
    let userExists = prompt("¿Cual es tu nombre de usuario?");
    if (userExists == users.nombre) {
        alert(`Muchas Gracias y bienvenido ${nombreUsuario}`);
    }
    else {
        alert("No se encontro el usuario");
    }
}
else if (loginOrRegister == "Register") {
    let crearUserNombre = prompt("Ingrese su Nombre y Apellido.");
    let crearUserEdad = prompt("Ingrese su Edad.");
    let crearUserDireccion = prompt("Ingrese su Direccion.");
    let crearUserEmail = prompt("Ingrese su email.");
    let usuarioCreado = users.push(new User(crearUserNombre,crearUserEdad, crearUserDireccion, crearUserEmail));
    alert(`Bienvenido ${crearUserNombre}!`);
}
else {
    alert("No se encontro el usuario");
} */

let loginOrRegister = prompt(
`Hola! Soy LT, para seguir accediendo a la página debes ingresar a tu cuenta o, si no tienes una, crearla. Ingresa “Login” (si tienes una cuenta), o “Register” (si no la tienes).`
);

if (loginOrRegister == "Login") {
    let userExists = prompt("¿Cual es tu nombre de usuario?");

    if (userExists == users.nombre) {
        alert(`Muchas Gracias y bienvenido ${nombreUsuario}`);
    } else {
        alert("No se encontro el usuario");
    }
} else if (loginOrRegister == "Register") {
    let crearUserNombre = prompt("Ingrese su Nombre y Apellido.");

    let crearUserEdad = prompt("Ingrese su Edad.");

    let crearUserDireccion = prompt("Ingrese su Direccion.");

    let crearUserEmail = prompt("Ingrese su email.");

    let usuarioCreado = users.push(
        new User(
            crearUserNombre,
            crearUserEdad,
            crearUserDireccion,
            crearUserEmail
        )
    );

    alert(`Bienvenido ${crearUserNombre}!`);
} else {
    alert("No se encontro el usuario");
}