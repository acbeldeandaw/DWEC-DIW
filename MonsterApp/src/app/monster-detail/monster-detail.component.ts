import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterDataServiceService } from '../monster-data-service.service';
import { Monster } from '../monster.model';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css'],
})
export class MonsterDetailComponent implements OnInit {
  monsterName: string;
  monster: any;

  constructor(
    private route: ActivatedRoute,
    monsters: MonsterDataServiceService
  ) {
    this.monsterName = route.snapshot.params['name'];
    this.monster = monsters
      .getMonsters()
      .find((monstruo) => monstruo.name == this.monsterName);
  }

  ngOnInit(): void {}
}
