// @ts-check
var Profesion;
(function (Profesion) {
    Profesion["Pintor"] = "pintor";
    Profesion["Programador"] = "programador";
    Profesion["Panadero"] = "panadero";
})(Profesion || (Profesion = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, profesion) {
        this.velocidad = 50;
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    Persona.prototype.saludar = function () {
        if (this.profesion == undefined) {
            console.log("Hola, mi nombre es " + this.nombre
                + " y tengo " + this.edad + " años.");
        }
        else {
            console.log("Hola, mi nombre es " + this.nombre
                + " y tengo " + this.edad + " años. Profesión: "
                + this.profesion);
        }
    };
    Persona.prototype.caminar = function (distancia) {
        console.log("Una persona tarda " + distancia / this.velocidad + " minutos en recorrer " + distancia + " metros.");
    };
    return Persona;
}());
var Perro = /** @class */ (function () {
    function Perro(raza, color) {
        this.velocidad = 100;
        this.raza = raza;
        this.color = color;
    }
    Perro.prototype.ladrar = function () {
        console.log("guau!");
    };
    Perro.prototype.caminar = function (distancia) {
        console.log("Un perro tarda " + distancia / this.velocidad + " minutos en recorrer " + distancia + " metros.");
    };
    return Perro;
}());
var persona = new Persona("Julio", 22);
persona.saludar();
persona.caminar(100);
var perro = new Perro("Husky", "Blanco");
perro.ladrar();
perro.caminar(100);
