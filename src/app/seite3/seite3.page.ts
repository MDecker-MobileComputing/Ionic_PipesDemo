import { Component } from '@angular/core';


@Component({
  selector: 'app-seite3',
  templateUrl: './seite3.page.html',
  styleUrls: ['./seite3.page.scss'],
})
export class Seite3Page {

  /**
   * Inhalt dieser Member-Variable wird über Interpolation mit/ohne Pipes dargestellt.
   *
   * Quelle: https://www.heise.de/newsticker/meldung/Das-Pferd-frisst-keinen-Gurkensalat-45602.html
   */
  public einSatz = "Das Pferd frisst keinen Gurkensalat.";

}
