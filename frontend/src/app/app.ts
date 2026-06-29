import { Component } from '@angular/core';
import { ApiService } from './services/api';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: '<h1>{{ message$ | async }}</h1>',
  styleUrls: ['./app.css']
})
export class App {
  message$: Observable<string>;

  constructor(private readonly api: ApiService) {
    this.message$ = this.api.getHello();
  }
}