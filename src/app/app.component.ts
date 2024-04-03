import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
 /*  public title = 'soFia SaNcheZ'; */

 constructor(private primengConfig: PrimeNGConfig) {}

 ngonInit() {
  this.primengConfig.ripple = true;
 }

}
