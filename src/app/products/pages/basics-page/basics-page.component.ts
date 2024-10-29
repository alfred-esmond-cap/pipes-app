import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'alfredo';
  public nameUpper: string = 'ALFREDO';
  public fullName: string = 'AlfReDo EstEban';

  public customDate: Date = new Date();

}
