import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})

export class AppComponent { 
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    // React to the tap of side menu item
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

    to
}
