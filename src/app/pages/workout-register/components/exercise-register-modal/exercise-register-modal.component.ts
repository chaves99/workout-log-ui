import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-register-modal',
  templateUrl: './exercise-register-modal.component.html',
  imports: [IonicModule, FormsModule],
  standalone: true,
})
export class ExerciseRegisterModalComponent implements OnInit {
  public name?: string;
  public reps?: number;
  public weight?: number;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalCtrl.dismiss(
      { name: this.name, reps: this.reps, weight: this.weight },
      'confirm'
    );
  }
}
