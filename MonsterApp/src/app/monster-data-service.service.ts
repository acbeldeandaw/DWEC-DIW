import { Injectable } from '@angular/core';
import { Monster, Race } from './monster.model';

@Injectable({
  providedIn: 'root',
})
export class MonsterDataServiceService {
  constructor() {}

  monsters: Monster[] = [
    new Monster('Legolas', Race.Elfo, 100, 1000),
    new Monster('Thrall', Race.Orco, 50, 800),
    new Monster('Zuldazar', Race.Trasgo, 70, 850),
    new Monster('Krundith', Race.Enano, 90, 600),
  ];

  getMonsters(): Monster[] {
    return this.monsters;
  }

  addMonster(m: Monster): void {
    this.monsters.push(m);
  }
}
