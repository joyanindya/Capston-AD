import { Members } from "./Members";

export interface Teams {
  GroupId?: number;
  GroupName?: string;
  OrganizationName?: string;
  SponsorName?: string;
  SponsorPhone?: string;
  SponsorEmail?: string;
  MaxGroupSize?: number;
  Members?: Array<Members>;
}
