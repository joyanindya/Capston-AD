import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Leagues } from "../models/Leagues";
import { Teams } from "../models/Teams";
import { LeaguesService } from "../services/leagues.service";

@Component({
  selector: "sr-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  leagues: Array<Leagues>;
  teams: Array<Teams>;
  teamsLinkClicked = false;

  constructor(
    private leaguesService: LeaguesService,
    private readonly router: Router
  ) {}

  getAllLeagues() {
    this.leaguesService.getAllLeagues().subscribe((reqs) => {
      this.leagues = reqs;
      console.table(this.leagues);
      console.log(this.leagues[1].Description);
    });
  }

  routeToTeams(leagueId: string) {
    this.teamsLinkClicked = true;
    this.router.navigate(["teams", leagueId]);
  }

  ngOnInit(): void {
    this.getAllLeagues();
  }
}
