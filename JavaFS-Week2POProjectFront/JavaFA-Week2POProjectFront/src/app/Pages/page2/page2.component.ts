import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private router: Router) { }

  goToHome(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
