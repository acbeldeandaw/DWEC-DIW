// @ts-check

function construirNombre(nombre: string, apellido?: string): string {
    if (apellido) return nombre + " " + apellido
    else return nombre
}

function comparar(p1: Persona, p2: Persona): void {
    if (p1.edad > p2.edad) {
        console.log(p1.nombre + ' es mayor que ' + p2.nombre);
    } else {
        console.log(p2.nombre + ' es mayor que ' + p1.nombre);
    }
}

enum Profesion {
    Pintor = 'pintor',
    Programador = 'programador',
    Panadero = 'panadero'
}

class Persona {

    public nombre: string;
    public edad: number;
    public profesion: Profesion;

    constructor(nombre: string, edad: number, profesion?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    public saludar(): void {
        if(this.profesion == undefined) {
            console.log("Hola, mi nombre es " + this.nombre
            + " y tengo " + this.edad + " años.");
        } else {
            console.log("Hola, mi nombre es " + this.nombre
            + " y tengo " + this.edad + " años. Profesión: "
            + this.profesion);
        }
        
    }

}

let p1 = new Persona("Adrian Cristian", 22);
p1.profesion = Profesion.Programador;

let p2 = new Persona("Julio", 21);

p1.saludar();
p2.saludar();
comparar(p1, p2);