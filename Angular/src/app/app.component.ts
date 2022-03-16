import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  description = 'Este es el ejercicio de prueba de angular';
  nombre: string = '';

  hidden = true;
  selected1 = false;
  selected2 = true;
  selected3 = false;
  checked1 = false;
  checked2 = true;
  checked3 = false;

  option: string = '';
  setOption(event: Event) {
    console.log(event);
    if ((<HTMLInputElement>event.target).value == 'op1')
      this.option = 'Se ha marcado la opción 1';
    else this.option = 'Se ha marcado la opción 2';
  }

  greet() {
    alert('Hi');
  }
}
