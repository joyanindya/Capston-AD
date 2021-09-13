import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sr-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  //router: Router;

  constructor() {}

  ngOnInit(): void {
    //this.router = this._router;
  }
}
