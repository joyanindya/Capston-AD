import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Leagues } from "../models/Leagues";

@Injectable({
  providedIn: "root",
})
export class LeaguesService {
  private getAllLeaguesUrl: string = "http://localhost:8082/api/organizations";
  private getTeamsByLeague: string =
    "http://localhost:8082/api/groups/byorganization/:id";

  getAllLeagues(): Observable<Leagues[]> {
    return this.http.get<Leagues[]>(this.getAllLeaguesUrl);
  }

  constructor(private http: HttpClient) {}
}
