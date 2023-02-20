import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MenuItem } from "./../../../../../node_modules/primeng/api";

@Component({
  selector: "app-admindashboard",
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.scss"],
})
export class AdmindashboardComponent implements OnInit {
  constructor() {}
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: "Search TMDB",
        icon: "pi pi-pw pi-search",
        items: [
          {
            label: "Search Movies",
            routerLink: "/movieex/wp-admin/admin-search-movies",
          },
          {
            label: "Search Tv-shows",
            routerLink: "/movieex/wp-admin/admin-search-tvs",
          },
        ],
      },
      {label: "SUDAN Cienma",icon: "pi pi-flag", items: [
        {
          label: "SD-Movies",
          routerLink: "/movieex/wp-admin/admin-sd-movies",
        },
        {
          label: "SD-Tvs",
          routerLink: "/movieex/wp-admin/admin-sd-tvs",
        },
        {
          label: "SD-Plays",
          routerLink: "/movieex/wp-admin/admin-sd-plays",
        },
      ]},
      {
        label: "Movies Catoulge",
        icon: "pi pi-pw pi-video",
        routerLink: "/movieex/wp-admin/movies",
      },
      {
        label: "Tv Shows Catoulge",
        icon: "pi pi-pw pi-clone",
        routerLink: "/movieex/wp-admin/tvs",
      },
      {
        label: "Plays Catoulge",
        icon: "pi pi-pw pi-play",
        routerLink: "/movieex/wp-admin/plays",
      },
      

      {
        label: "Logout",
        icon: "pi pi-pw pi-sign-out",
        routerLink: "/movieex/wp-admin/admin-login",
      },
    ];
  }
}
