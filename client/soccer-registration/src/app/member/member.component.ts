import { MemberService } from "./../services/member.service";
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
  selectedMember: Members;
  member: Members = {};
  cols: any[];
  displayDialog: boolean;
  newMember: boolean;

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
    this.groupService.getOneGroupById(groupId).subscribe((reqs) => {
      this.team = reqs;
      console.log(this.team);
      this.members = this.team.Members;
      console.log(this.members);
    });
  }

  onRowSelect(event) {
    this.newMember = false;
    this.member = this.cloneTeam(event.data);
    this.displayDialog = true;
    console.log(this.member);
  }

  cloneTeam(m: Members): Members {
    let member = {};
    for (let prop in m) {
      member[prop] = m[prop];
    }
    return member;
  }

  showDialogToAdd() {
    this.newMember = true;
    this.member = {};
    this.displayDialog = true;
  }

  delete(memberId: number) {
    this.memberService.deleteMemberById(this.groupId, memberId).subscribe(
      (member) => {
        this.getGroupById(this.groupId);
      },
      (error) => alert("Sorry, unable to delete player.")
    );
    this.member = {};
    this.displayDialog = false;
  }

  save(member: Members) {
    console.log(member);
    this.memberService.saveEditMember(member, this.groupId).subscribe(
      (group) => {
        this.getGroupById(this.groupId);
      },
      (error) => alert("Sorry, unable to add course.")
    );
    this.team = {};
    this.displayDialog = false;
  }

  constructor(
    private readonly route: ActivatedRoute,
    private readonly groupService: GroupsService,
    private readonly memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.subscribeToRouteParams();
    this.cols = [
      { field: "MemberName", header: "Player Name" },
      { field: "MemberPhone", header: "Player Phone" },
      { field: "MemberEmail", header: "Player Email" },
    ];
  }
}