import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, addOutline, removeOutline } from 'ionicons/icons';
import { ExerciseExecutionModel, ExerciseModel } from 'src/app/shared';

@Component({
  selector: 'wl-exercise-table',
  templateUrl: './exercise-table.component.html',
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
    IonButtons,
    IonLabel,
    IonItem,
    IonItemGroup,
    IonItemDivider,
    CommonModule,
  ],
})
export class ExerciseTableComponent implements OnInit {
  @Output() executionDeletion = new EventEmitter<{
    execution: ExerciseExecutionModel;
    exerciseName: string;
  }>();

  @Input('exercises')
  exercises: ExerciseModel[] | undefined = [];

  constructor() {}

  ngOnInit() {
    addIcons({ addOutline, add, removeOutline });
  }

  deleteExecution({
    execution,
    exerciseName,
  }: {
    execution: ExerciseExecutionModel;
    exerciseName: string;
  }): void {
    this.executionDeletion.emit({
      execution: execution,
      exerciseName: exerciseName,
    });
  }
}
