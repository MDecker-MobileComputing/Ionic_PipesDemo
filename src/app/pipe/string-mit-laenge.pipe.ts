import { Pipe, PipeTransform } from '@angular/core';

/**
 * Befehl, mit dem diese Pipeline-Klasse erzeugt wurde:
 * `ionic generate pipe StringMitLaenge`
 */
@Pipe({
  name: 'stringMitLaenge'
})
export class StringMitLaengePipe implements PipeTransform {

  /**
   * Methode, die die eigentliche Logik der Pipe enthält.
   * 
   * Beispiel: 
   * * Input: `abcd`
   * * Output: `abcd (4)`
   * 
   * @param value  Input-Wert für die Pipe
   * @param args   Hier nicht definiert, wird also nicht ausgewertet
   * 
   * @return  Output-Wert; String aus `value` mit Anzahl der Zeichen in 
   *          Klammer dahinter.
   */
  transform(value: unknown, ...args: unknown[]): unknown {

    let derString = "" + value;

    derString = derString.trim();

    const ergebnisStr = `${derString} (${derString.length})`;

    return ergebnisStr;
  }

}
