import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],  // Asegúrate de incluir RouterModule aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'cineplus-angular';
}