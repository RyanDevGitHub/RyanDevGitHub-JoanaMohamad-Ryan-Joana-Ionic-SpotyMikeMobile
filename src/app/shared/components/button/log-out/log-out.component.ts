import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
  standalone: true,
  imports: [IonButton,],
})
export class LogOutComponent implements OnInit {
  router = inject(Router);
  constructor() { }


  ngOnInit() { }
  logOut() {
    this.router.navigate(['/auth/login'])

  }
}
