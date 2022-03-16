import { Component, Input, OnInit } from '@angular/core';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monster-c',
  templateUrl: './monster-c.component.html',
  styleUrls: ['./monster-c.component.css'],
})
export class MonsterCComponent implements OnInit {

  @Input() monster: Monster;

  constructor() {}

  ngOnInit(): void {}

  isOrcTroll(race: string): boolean {
    if(race == "Orco" || race == "Trasgo") {
      return true;
    } else {
      return false;
    }
  }
  isDwarfElf(race: string): boolean {
    if(race == "Enano" || race == "Elfo") {
      return true;
    } else {
      return false;
    }
  }

}
