import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Leagues } from "../models/Leagues";
import { Teams } from "../models/Teams";

@Injectable({
  providedIn: "root",
})
export class LeaguesService {
  private getAllLeaguesUrl: string = "http://localhost:8082/api/organizations";
  private getTeamsByLeague: string =
    "http://localhost:8082/api/groups/byorganization/";

  getAllLeagues(): Observable<Leagues[]> {
    return this.http.get<Leagues[]>(this.getAllLeaguesUrl);
  }

  getAllTeamsByLeagues(leagueId: string): Observable<Teams[]> {
    return this.http.get<Teams[]>(`${this.getTeamsByLeague}${leagueId}`);
  }

  constructor(private http: HttpClient) {}
}
