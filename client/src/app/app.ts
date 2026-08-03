import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar";
import { Header } from "./core/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client');
}
