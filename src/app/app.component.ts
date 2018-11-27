// import { Component } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent  {
//   name = 'Angular';
// }


import { Component } from "@angular/core";
import { Model } from "./model";
@Component({
  selector: "todo-app",
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  getName() {
    return this.model.user;
  }
}