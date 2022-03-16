import { Component, OnInit } from '@angular/core';
import { MonsterDataServiceService } from '../monster-data-service.service';
import { Monster, Race } from '../monster.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  name: string = 'Legolas';
  race: Race = Race.Elfo;
  atk: number = 100;
  hp: number = 1000;
  monsters: Monster[] = [];

  constructor(private monsterData: MonsterDataServiceService) {
    this.monsters = this.monsterData.getMonsters();
  }

  getRaces() {
    return Object.keys(Race);
  }

  create() {
    this.monsterData.addMonster(
      new Monster(this.name, this.race, this.atk, this.hp)
    );
  }

  ngOnInit(): void {}
}
