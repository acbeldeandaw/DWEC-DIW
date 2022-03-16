// @ts-check
function construirNombre(nombre, apellido) {
    if (apellido)
        return nombre + " " + apellido;
    else
        return nombre;
}
function comparar(p1, p2) {
    if (p1.edad > p2.edad) {
        console.log(p1.nombre + ' es mayor que ' + p2.nombre);
    }
    else {
        console.log(p2.nombre + ' es mayor que ' + p1.nombre);
    }
}
var Profesion;
(function (Profesion) {
    Profesion["Pintor"] = "pintor";
    Profesion["Programador"] = "programador";
    Profesion["Panadero"] = "panadero";
})(Profesion || (Profesion = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, profesion) {
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
    return Persona;
}());
var p1 = new Persona("Adrian Cristian", 22);
p1.profesion = Profesion.Programador;
var p2 = new Persona("Julio", 21);
p1.saludar();
p2.saludar();
comparar(p1, p2);
