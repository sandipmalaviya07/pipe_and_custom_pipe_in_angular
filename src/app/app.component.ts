import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes-demo';

  dateToday: string = "";
  name: string = "";

  constructor() { }

  ngOnInit(): void {

    this.dateToday = new Date().toDateString();

    this.name = "Samarpan";

  }
  
}
