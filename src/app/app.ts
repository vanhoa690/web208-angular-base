import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListPage } from './pages/list-page/list-page';
import { AddPage } from './pages/add-page/add-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListPage, AddPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'web2081-angular-base';
}
