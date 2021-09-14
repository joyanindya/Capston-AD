import { TeamsComponent } from "./teams/teams.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

const fallbackRoute: Route = {
  path: "**",
  component: HomeComponent,
};

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "teams/:id", component: TeamsComponent },
      fallbackRoute,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
