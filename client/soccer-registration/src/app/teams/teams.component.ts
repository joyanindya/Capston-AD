import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { Teams } from "../models/Teams";
import { LeaguesService } from "../services/leagues.service";

@Component({
  selector: "sr-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.scss"],
})
export class TeamsComponent implements OnInit {
  teams: Array<Teams>;
  selectedTeams: Array<Teams>;
  team: Teams;
  leagueId: string;
  submitted: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly leaguesService: LeaguesService
  ) {}

  private subscribeToRouteParams(): Subscription {
    return this.route.params.subscribe((params: Params) => {
      if (params) {
        this.leagueId = params.id;
        console.log(this.leagueId);
        this.getAllTeamsByLeagues(this.leagueId);
      }
    });
  }
  private getAllTeamsByLeagues(leagueId: string) {
    this.leaguesService.getAllTeamsByLeagues(leagueId).subscribe((reqs) => {
      this.teams = reqs;
      console.table(this.teams);
    });
  }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }
}
