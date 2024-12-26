import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'wl-workout-name-modal',
  templateUrl: './workout-name-modal.component.html',
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonToolbar,
    IonTitle,
    FormsModule,
  ],
})
export class WorkoutNameModalComponent {
  public name?: string;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
