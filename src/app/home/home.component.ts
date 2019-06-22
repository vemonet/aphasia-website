import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  safeURL: any;

  constructor(private _sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/-GsVhbmecJA?autoplay=0');
  }

  ngOnInit() {
    // this.snackBar.open('This website is a MVP / Prototype. We are working hard on a fully functional product. Feel free to join!', 'OK', {
    //   duration: 200000,
    //   panelClass: ['snackbar-warn-dev']
    // });
  }

}
