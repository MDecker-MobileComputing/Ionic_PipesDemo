import { Component } from '@angular/core';

@Component({
  selector: 'app-seite6',
  templateUrl: './seite6.page.html',
  styleUrls: ['./seite6.page.scss'],
  standalone: false
})
export class Seite6Page {

  /** Promise für ein Array-Objekt, dessen Elemente als Liste anzuzeigen sind. */
  public laenderArrayPromise = this.getLaenderNamen();


  /**
   * Methode liefert ein Promise-Objekt zurück, das nach 1,5 Sekunden auflöst.
   * Das Promise-Objekt enthält einen Array mit einigen Länder-Namen.
   */
  public async getLaenderNamen(): Promise<Array<string>> {

    const promise = new Promise<Array<string>>(function(resolveCallback, rejectCallback) {

        let laenderArray = [ "Deutschland", "Frankreich", "Schweiz", "Spanien" ];

        setTimeout(
            function() { resolveCallback( laenderArray ); },
            1500
        );
    });

    return promise;
  }

}
