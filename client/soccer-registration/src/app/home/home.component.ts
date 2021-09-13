import { Component, OnInit } from "@angular/core";
import { Leagues } from "../models/Leagues";
import { LeaguesService } from "../services/leagues.service";

@Component({
  selector: "sr-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private leagues: Array<Leagues>;

  constructor(private leaguesService: LeaguesService) {}

  ngOnInit(): void {
    this.leaguesService.getAllLeagues().subscribe((reqs) => {
      this.leagues = reqs;
      console.table(this.leagues);
      console.log(this.leagues[1].Description);
    });
  }
}
