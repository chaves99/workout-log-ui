import { CommonModule, LocationStrategy } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, arrowForward, star } from 'ionicons/icons';

@Component({
  selector: 'app-workout-register-name',
  templateUrl: './workout-register-name.page.html',
  standalone: true,
  imports: [
    IonIcon,
    IonInput,
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class WorkoutRegisterNamePage implements OnInit {
  public name?: string;

  private locationStrategy = inject(LocationStrategy);
  private router = inject(Router);

  constructor() {
    addIcons({ arrowBack, arrowForward, star });
  }

  ngOnInit() {}

  confirm() {
    this.router.navigate(['pages', 'workout-register', this.name]);
  }

  cancel() {
    console.log(this.locationStrategy);
    if (this.locationStrategy.historyGo) {
      this.locationStrategy.historyGo(-1);
    }
  }
}
