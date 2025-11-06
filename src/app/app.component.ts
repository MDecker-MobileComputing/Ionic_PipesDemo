import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

    /** Menü-Einträge, werden mit `*ngFor` dargestellt. */
    public menueEintraegeArray = [
      {
        titel: "Groß-/Kleinschreibung (Standard)",
        ziel: "/home"
      },
      {
        titel: "Datumsformatierung (Standard)",
        ziel: "/seite2"
      },
      {
        titel: "Promise auflösen (Standard)",
        ziel: "/seite5"
      },
      {
        titel: "Array-Promise auflösen (Standard)",
        ziel: "/seite6"
      },
      {
        titel: "String-Länge (Custom)",
        ziel: "/seite3"
      },
      {
        titel: "Prozentwert (Custom)",
        ziel: "/seite4"
      }
    ];

}
