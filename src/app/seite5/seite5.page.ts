import { Component } from '@angular/core';


/**
 * Tutorial zu async-Pipe für Auflösung Promise:
 * https://www.joshmorony.com/using-asyncawait-syntax-for-promises-in-ionic/
 */
@Component({
  selector: 'app-seite5',
  templateUrl: './seite5.page.html',
  styleUrls: ['./seite5.page.scss'],
  standalone: false
})
export class Seite5Page {

  /** Member-Variable mit Promise, der mit `async`-Pipe aufgelöst werden soll. */
  public temperaturPromise = this.getTemperatur();


  /**
   * Funktion zur Simulation einer "langlaufenden" Anfrage, die die aktuelle Lufttemperatur
   * am Ort des Nutzers zurückgibt. Diese Temperatur könnte z.B. von einem Sensor oder
   * einer Web-API zurückgeliefert werden.
   *
   * Quelle:
   * https://github.com/MDecker-MobileComputing/TypeScript_Grundlagen/blob/master/beispiele/promises/WindchillBerechnungMitPromise.ts
   *
   * @return Promise mit Temperatur in Grad Celsius, löst nach einer halben Sekunde immer auf "5" (Grad) auf.
   */
  public async getTemperatur(): Promise<Number> {

    const temperaturObjekt = new Number(5);

    const promise = new Promise<Number>(function(resolveCallback, rejectCallback) {

        setTimeout(
            function() { resolveCallback( temperaturObjekt ); },
            1500
        );
    });

    return promise;
  }

}
