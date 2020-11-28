import { Component } from '@angular/core';


/**
 * Dokumentation zur `DatePipe`: https://angular.io/api/common/DatePipe
 * <br><br>
 * 
 * Siehe auch das folgende Tutorial: 
 * https://www.angularjswiki.com/angular/angular-date-pipe-formatting-date-times-in-angular-with-examples/
 */
@Component({
  selector: 'app-seite2',
  templateUrl: './seite2.page.html',
  styleUrls: ['./seite2.page.scss'],
})
export class Seite2Page  {

  /** Datum von heute; Inhalt dieser Member-Variable wird über Interpolation mit/ohne Pipes dargestellt. */
  private aktuellesDatum = Date.now();

}
