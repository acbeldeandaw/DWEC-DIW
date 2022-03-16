import { Component } from '@angular/core';
import { MonsterDataServiceService } from './monster-data-service.service';
import { Monster, Race } from './monster.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MonsterApp';
}
