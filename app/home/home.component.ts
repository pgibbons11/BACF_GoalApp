import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    constructor() {
    }

    ngOnInit(): void {
    }
}
