import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MainComponent } from "./main/main.component";
import { TeamsComponent } from "./teams/teams.component";

import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { SharedModule } from "primeng/api";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { FileUploadModule } from "primeng/fileupload";
import { ToolbarModule } from "primeng/toolbar";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
// import { ConfirmationService } from "primeng/api";
// import { MessageService } from "primeng/api";
import { InputTextareaModule } from "primeng/inputtextarea";

import { MemberComponent } from "./member/member.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    TeamsComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    // ConfirmationService,
    // MessageService,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
