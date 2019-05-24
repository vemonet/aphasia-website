import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'danger',
      msg: `This website is a MVP / Prototype. We are working hard on a fully functional product. Feel free to join!`
    }
  ];
  alerts = this.defaultAlerts;

  constructor(private user: UserService) { }

  ngOnInit() {
    console.log('before user init:');
    console.log(this.user);
    this.user.login();
  }
 
  reset(): void {
    this.alerts = this.defaultAlerts;
  }
 
  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
