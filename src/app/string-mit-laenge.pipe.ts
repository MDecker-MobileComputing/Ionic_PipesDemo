import { Pipe, PipeTransform } from '@angular/core';

/**
 * Befehl, mit dem diese Pipeline-Klasse erzeugt wurde:
 * `ionic generate pipe StringMitLaenge`
 */
@Pipe({
  name: 'stringMitLaenge'
})
export class StringMitLaengePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return "blafasel";
  }

}
