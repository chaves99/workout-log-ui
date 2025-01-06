import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from '@ionic/angular/standalone';
import { WorkoutModel } from 'src/app/shared';
import parseFormattedHour from '../../helper/utils.helper';

@Component({
  selector: 'wl-workout-card',
  templateUrl: './workout-card.component.html',
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonIcon,
    IonCard,
    IonButton,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    DatePipe,
    CommonModule,
  ],
})
export class WorkoutCardComponent implements OnInit {
  @Input()
  workout?: WorkoutModel;

  @Output()
  workoutDetailEvent = new EventEmitter<WorkoutModel>();

  constructor() {}

  ngOnInit() {}

  calcTimeDifference(start: Date, end?: Date): string {
    if (!end) {
      throw Error('End date null');
    }
    return parseFormattedHour(start, end);
  }

  workoutDetailClick() {
    this.workoutDetailEvent.emit(this.workout);
  }
}
