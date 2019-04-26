import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ScrollEventData, ScrollView } from "tns-core-modules/ui/scroll-view"
import { EventData } from "tns-core-modules/ui/core/view/view";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
class View {
  constructor(public name: String) { }
}

let viewNames = ["1", "2", "3", "4", "5", "6", "7"]

@Component({
    selector: "Dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public views: Array<View> = [];

    constructor() {

    }

    ngOnInit(): void {
      for(let i = 0; i < viewNames.length; i++) {
        this.views.push(new View(viewNames[i]));
      }
    }

    onTap(args: EventData) {
        // using the unique id assigned via the view-model
        console.log(args.object.get("id"));
    }

    onScroll(args: ScrollEventData) {
        console.log("scrollX: " + args.scrollX + "; scrollY: " + args.scrollY);
        //(<ScrollView>args.object).scrollToHorizontalOffset(50, true);
    }

    // onScrollEnded(args: ScrollEventData) {
    //     (<ScrollView>args.object).scrollToIndex(2, true);
    // }
}
