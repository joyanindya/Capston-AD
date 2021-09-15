import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Members } from "../models/Members";

@Injectable({
  providedIn: "root",
})
export class MemberService {
  private membersUrl: string = "http://localhost:8082/api/groups";
  private memberString: string = "members";
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set("Content-Type", "application/json"),
  };

  deleteMemberById(groupId: number, memberId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.membersUrl}/${groupId}/${this.memberString}/${memberId}`
    );
  }

  saveEditMember(member: Members, groupId: number): Observable<Members> {
    if (!member.MemberId) {
      return this.http.post<Members>(
        `${this.membersUrl}/${groupId}/${this.memberString}`,
        member,
        this.jsonContentTypeHeaders
      );
    } else {
      return this.http.put<Members>(
        `${this.membersUrl}/${groupId}/${this.memberString}`,
        member,
        this.jsonContentTypeHeaders
      );
    }
  }

  constructor(private http: HttpClient) {}
}
