import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonRow,
  IonIcon,
} from '@ionic/angular/standalone';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  standalone: true,
  imports: [
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonButton,
    IonInput,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  email?: string;
  password?: string;

  localStorageService = inject(LocalStorageService);
  router = inject(Router);

  constructor() {
    addIcons({ arrowBack });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.email && this.password) {
      this.localStorageService
        .store('userPassword', this.email + this.password)
        .then(() => {
          this.router.navigateByUrl('pages');
        });
    }
  }
}
