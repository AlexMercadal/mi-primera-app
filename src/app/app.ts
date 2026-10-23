import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarjeta } from './tarjeta/tarjeta';

@Component({
  imports: [RouterOutlet, Tarjeta],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html'

})
export class App {
  protected readonly title = signal('adios');
}
