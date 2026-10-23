import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta',
  styleUrl: './tarjeta.scss',
  templateUrl: './tarjeta.html',
})
export class Tarjeta {
  protected readonly nombre = signal('nombre');
  protected readonly edad = signal('edad');
  protected readonly ciudad = signal('ciudad');
}

