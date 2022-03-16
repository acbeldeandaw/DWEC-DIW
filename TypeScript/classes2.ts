// @ts-check

interface Mamifero {
    velocidad: number;
    caminar(distancia: number): void;
}

enum Profesion {
    Pintor = 'pintor',
    Programador = 'programador',
    Panadero = 'panadero'
}

class Persona implements Mamifero {

    public nombre: string;
    public edad: number;
    public profesion: Profesion;
    public velocidad: number = 50;

    constructor(nombre: string, edad: number, profesion?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    public saludar(): void {
        if (this.profesion == undefined) {
            console.log("Hola, mi nombre es " + this.nombre
                + " y tengo " + this.edad + " años.");
        } else {
            console.log("Hola, mi nombre es " + this.nombre
                + " y tengo " + this.edad + " años. Profesión: "
                + this.profesion);
        }
    }

    public caminar(distancia: number) {
        console.log("Una persona tarda " + distancia / this.velocidad + " minutos en recorrer " + distancia + " metros.");
    }

}

class Perro implements Mamifero {

    public raza: string;
    public color: string;
    public velocidad: number = 100;

    constructor(raza: string, color: string) {
        this.raza = raza;
        this.color = color;
    }

    public ladrar(): void {
        console.log("guau!");
    }

    public caminar(distancia: number) {
        console.log("Un perro tarda " + distancia / this.velocidad + " minutos en recorrer " + distancia + " metros.");
    }

}


let persona = new Persona("Julio", 22);
persona.saludar();
persona.caminar(100);

let perro = new Perro("Husky", "Blanco");
perro.ladrar();
perro.caminar(100);