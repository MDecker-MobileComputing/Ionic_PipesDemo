import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'prozentwert',
  standalone: false
})
export class ProzentwertPipe implements PipeTransform {

  transform(value: number, grundwert:number=100, nachkommastellen:number=1): string {

    const prozentwert = value*100.0 / grundwert;

    const faktor = Math.pow(10, nachkommastellen);
    const prozentwertGerundet = Math.round(prozentwert*faktor) / faktor;

    return prozentwertGerundet + "%";
  }

}
