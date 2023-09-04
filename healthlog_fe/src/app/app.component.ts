import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public ui: UiService, private data: DataService) {}
  title = 'healthlog_fe';
}
