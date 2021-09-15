import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Leagues } from "../models/Leagues";
import { Teams } from "../models/Teams";

@Injectable({
  providedIn: "root",
})
export class GroupsService {
  private teamsUrl: string = "http://localhost:8082/api/groups";
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };

  deleteTeamsByTeamId(groupId: number): Observable<void> {
    return this.http.delete<void>(`${this.teamsUrl}/${groupId}`);
  }

  getOneGroupById(groupId: number): Observable<Teams> {
    return this.http.get<Teams>(`${this.teamsUrl}/${groupId}`);
  }

  saveEditGroup(team: Teams, name: string): Observable<Teams> {
    console.log(team.GroupId);
    console.log(name);
    if (!team.GroupId) {
      team.OrganizationName = name;
      return this.http.post<Teams>(
        this.teamsUrl,
        team,
        this.jsonContentTypeHeaders
      );
    } else {
      return this.http.put<Teams>(
        this.teamsUrl,
        team,
        this.jsonContentTypeHeaders
      );
    }
  }

  constructor(private http: HttpClient) {}
}
