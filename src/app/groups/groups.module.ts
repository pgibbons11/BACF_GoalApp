import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { GroupsRoutingModule } from "./groups-routing.module";
import { GroupsComponent } from "./groups.component";

@NgModule({
    imports: [
        NativeScriptModule,
        GroupsRoutingModule
    ],
    declarations: [
        GroupsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GroupsModule { }
