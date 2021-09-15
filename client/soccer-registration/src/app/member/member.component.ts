import { GroupsService } from "./../services/groups.service";
import { Members } from "./../models/Members";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Teams } from "../models/Teams";

@Component({
  selector: "sr-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.css"],
})
export class MemberComponent implements OnInit {
  groupId: number;
  members: Members[];
  team: Teams;

  private subscribeToRouteParams(): Subscription {
    return this.route.params.subscribe((params: Params) => {
      if (params) {
        this.groupId = params.id;
        console.log(this.groupId);
        this.getGroupById(this.groupId);
      }
    });
  }

  getGroupById(groupId: number) {
    this.groupsService.getOneGroupById(groupId).subscribe((reqs) => {
      this.team = reqs;
      console.log(this.team);
      this.members = this.team.Members;
      console.log(this.members);
    });
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupsService: GroupsService
  ) {}

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }
}
