
class Personas {
    constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
    }

    detalle() {
        var detail = {
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            domicilio: this.domicilio,
        }
        return detail;
    }

}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona
  //(creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
    const new_person = new Personas(nombre, apellido, edad, dir);

    return new_person;
}

function agregarMetodo(){
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la
  //persona y devuelve: 
  //Ej: "Juan, 22 años"
    Personas.prototype.datos = function(){
        return this.nombre + ", " + this.edad + " años";
    }

}

const carlitos = crearInstanciaPersona("Carlos", "Ramirez", 32, "Sutano 9");
let arr = ["arroyo", "canasto", "color", "arugula", "astuto", "carnal"];
const car2 = { myCar: 'Saturn', precio: 25000, porcentajeDeDescuento: 0.10};
const car3 = {D: 1, B: 2, C: 3};
const car = { myCar: 'Saturn', posts: [car2, car3]};
let arr1 = [car, car2];
agregarMetodo();


function crearClasePersona(){
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer),
      // hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
    }

    addFriend(nombre, edad){
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
        var friend = {
                nombre: nombre,
                edad: edad
            };

        this.amigos.push(friend);
    }

    addHobby(hobby){
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
        this.hobbies.push(hobby);
    }

    getFriends(){
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
        const friends = this.amigos.map(function(element){
            return element["nombre"];
        });

        return friends;
    }

    getHobbies(){
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
        return this.hobbies;
    }

    getPromedioEdad(){
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
        const sum_age_friends = this.amigos.reduce(function(acc, element){
            return acc["edad"] + element["edad"];
        });

        return sum_age_friends / this.amigos.length;
    }
  }

  return Persona;
}

var Persona = crearClasePersona();
const carlito = new Persona("Carlito", 36, [], []);
carlito.addFriend("Negro", 44);
carlito.addFriend("Adolfo", 57);
carlito.addHobby("baseball");
carlito.addHobby("travel");
carlito.addHobby("videogames");



console.log(carlito.getFriends());
console.log(carlito.getHobbies());
console.log(carlito.getPromedioEdad());
//console.log(mayorACien(arr1));
//console.log(tieneTresDigitos(1));
//console.log(multiplicarArgumentos(1, 2, 3));
//console.log(multiplicarArgumentos(5, 5, 5));
//console.log(multiplicarArgumentos());

function filtrar() {
  // Escribe una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // Filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
    Array.prototype.filtrar = function(funcion){
        const filtered = [];

        for (let i = 0; i < this.length; i++) {
            if(funcion(this[i]))
                filtered.push(this[i]);
        }
        return filtered;
    }
}

filtrar();
var productos = [{
 price: 100,
 name: 'tv'
}, {
 price: 50,
 name: 'phone'
}, {
 price: 30,
 name: 'lamp'
}]


console.log(productos.filtrar(p => p.price >= 50));
//console.log(carlito.getHobbies());
//console.log(carlito.getPromedioEdad());
