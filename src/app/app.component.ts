import { Component } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { UsersServic } from './users-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServic]
})
export class AppComponent {
  
}
