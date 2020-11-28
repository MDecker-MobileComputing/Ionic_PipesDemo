import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringMitLaengePipe } from './string-mit-laenge.pipe';
import { ProzentwertPipe} from './prozenztwert.pipe';


/**
 * Eigenes Modul für Custom Pipes laut https://stackoverflow.com/a/57860769
 * (siehe auch https://stackblitz.com/edit/angular-dwkjch?file=src%2Fapp%2Fpipe%2Fpipe1.pipe.ts ).
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StringMitLaengePipe, ProzentwertPipe
  ],
  declarations: [
    StringMitLaengePipe, ProzentwertPipe
  ]
})
export class PipeModule { }