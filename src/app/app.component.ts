import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<router-outlet></router-outlet>
              <app-data-biding></app-data-biding>
              `
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }
  }
  

