import { Component, ViewEncapsulation } from "@angular/core";
import { Event, NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
  selector: "sr-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
