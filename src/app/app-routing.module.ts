import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "../home/home.component";
import { ProfileComponent } from "../profile/profile.component";
import { GroupsComponent } from "../groups/groups.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//dashTab:dashboard//groupsTab:groups//profileTab:profile)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "homeTab"},
    { path: "dashboard", component: DashboardComponent, outlet: "dashTab"},
    { path: "groups", component: GroupsComponent, outlet: "groupsTab"},
    { path: "profile", component: ProfileComponent, outlet: "profileTab"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
