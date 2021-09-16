import { Component, ViewEncapsulation } from "@angular/core";
import { Event, NavigationEnd, NavigationStart, Router } from "@angular/router";

@Component({
  selector: "sr-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // currentRoute: string;
  // constructor(private router: Router) {
  //   this.currentRoute = "";
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationStart) {
  //       // console.log('Route change detected');
  //     }
  //     if (event instanceof NavigationEnd) {
  //       this.currentRoute = event.url;
  //       console.log(event);
  //       this.setBgImage(this.currentRoute);
  //     }
  //   });
  // }
  // setBgImage(route) {
  //   if (route === "/") {
  //     console.log(this.router.url);
  //     console.log("on home page");
  //     document.querySelector("main").className = "homeImage";
  //   } else if (route === "/about") {
  //     console.log(this.router.url);
  //     document.querySelector("main").className = "aboutImage";
  //   }
  // }
  // ngOnInit(): void {}
}
