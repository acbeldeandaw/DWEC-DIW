export class Monster {
  name: string;
  race: string;
  atk: number;
  hp: number;

  attack() {

  }
  specialAttack() {

  }

  constructor(name: string, race: string, atk: number, hp: number) {
    this.name = name;
    this.race = race;
    this.atk = atk;
    this.hp = hp;
  }
}

export enum Race {
  Orco = "Orco",
  Trasgo = "Trasgo",
  Enano = "Enano",
  Elfo = "Elfo",
}
