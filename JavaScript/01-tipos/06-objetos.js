// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", // llave - valor / propiedad
    anime: "Demon Slayer",
    edad: 16,
}; // objeto literal
console.log(personaje);

// Acceder a valor en especifico
console.log(personaje.nombre);
console.log(personaje['anime']);
// Cambiar valor
personaje.edad = 13;
personaje['edad'] = 16;
// Eliminar llave
delete personaje.anime