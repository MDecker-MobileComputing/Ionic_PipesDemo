import { Component } from '@angular/core';


/**
 * Offizielle Doku zu den in Angular eingebauten Pipes: https://angular.io/guide/pipes
 * <br><br>
 *
 * Doku zu den hier verwendeten Pipes:
 * * `UpperCasePipe`: https://angular.io/api/common/UpperCasePipe
 * * `LowerCasePipe`: https://angular.io/api/common/LowerCasePipe
 * * `TitleCasePipe`: https://angular.io/api/common/TitleCasePipe
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  /** Inhalt dieser Member-Variable wird über Interpolation mit/ohne Pipes dargestellt. */
  public vorUndNachname = "Max MacCrazy";

}
