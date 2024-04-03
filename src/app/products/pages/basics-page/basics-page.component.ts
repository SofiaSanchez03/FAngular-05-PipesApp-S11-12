import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'sofia';
  public nameUpper: string = 'SOFIA';
  public fullName: string = 'sOfIa';

  public customDate: Date = new Date();
}
