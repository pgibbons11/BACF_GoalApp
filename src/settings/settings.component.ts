import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

class Setting {
  constructor(public name: String) { }
}

let names = ["Setting 1", "Setting 2", "Setting 3", "Setting 4", "Setting 5", "Setting 6", "Setting 7"]


@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
    public settings: Array<Setting>;

    constructor(private routerExtensions: RouterExtensions) {
        this.settings = [];

        for(let i = 0; i < names.length; i++) {
          this.settings.push(new Setting(names[i]));
        }
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    goBack(): void {
		    this.routerExtensions.back();
	  }
}
