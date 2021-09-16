import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { GroupsService } from "./../services/groups.service";
import { Teams } from "../models/Teams";
import { LeaguesService } from "../services/leagues.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "sr-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"],
})
export class TeamsComponent implements OnInit {
  teams: Array<Teams>;
  selectedTeams: Teams;
  team: Teams = {};
  leagueId: string;
  cols: any[];
  displayDialog: boolean;
  newTeam: boolean;
  organizationName: string;
  teamForm: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly leaguesService: LeaguesService,
    private readonly groupService: GroupsService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) {}

  private subscribeToRouteParams(): Subscription {
    return this.route.params.subscribe((params: Params) => {
      if (params) {
        this.leagueId = params.id;
        this.organizationName = params.name;
        console.log(this.leagueId);
        this.getAllTeamsByLeagues(this.leagueId);
      }
    });
  }
  private getAllTeamsByLeagues(leagueId: string) {
    this.leaguesService.getAllTeamsByLeagues(leagueId).subscribe((reqs) => {
      this.teams = reqs;
      console.log(this.teams);
    });
  }

  onRowSelect(event) {
    this.newTeam = false;
    this.team = this.cloneTeam(event.data);
    this.displayDialog = true;
    console.log(this.team);
  }

  cloneTeam(t: Teams): Teams {
    let team = {};
    for (let prop in t) {
      team[prop] = t[prop];
    }
    return team;
  }

  showDialogToAdd() {
    this.newTeam = true;
    this.team = {};
    this.displayDialog = true;
  }

  delete(groupId: number) {
    this.groupService.deleteTeamsByTeamId(groupId).subscribe(
      (group) => {
        this.getAllTeamsByLeagues(this.leagueId);
      },
      (error) => alert("Sorry, unable to add course.")
    );
    this.team = {};
    this.displayDialog = false;
  }

  routeToMembers(groupId: number) {
    this.router.navigate(["members", groupId, this.leagueId]);
    console.log(groupId);
  }

  save(team: Teams) {
    this.groupService.saveEditGroup(team, this.organizationName).subscribe(
      (group) => {
        this.getAllTeamsByLeagues(this.leagueId);
      },
      (error) => alert("Sorry, unable to add course.")
    );
    this.team = {};
    this.displayDialog = false;
  }

  ngOnInit(): void {
    this.subscribeToRouteParams();
    this.cols = [
      { field: "GroupName", header: "Team Name" },
      { field: "SponsorName", header: "Sponsor Name" },
      { field: "SponsorPhone", header: "Sponsor Phone" },
      { field: "SponsorEmail", header: "Sponsor Email" },
      { field: "MaxGroupSize", header: "Max Group Size" },
    ];

    this.teamForm = this.formBuilder.group({
      groupName: new FormControl("", Validators.required),
      sponsorName: new FormControl("", Validators.required),
      sponsorPhone: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      maxGroupSize: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      sponsorEmail: new FormControl("", [
        Validators.required,
        Validators.pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"),
      ]),
    });
  }
}
