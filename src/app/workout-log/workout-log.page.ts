import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { ExerciseService, WorkoutModel } from '../shared';
import { addIcons } from 'ionicons';
import { barbellOutline } from 'ionicons/icons';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.page.html',
  standalone: true,
  imports: [
    IonList,
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    CommonModule,
    FormsModule,
  ],
})
export class WorkoutLogPage implements OnInit {
  public workouts: WorkoutModel[] = [
    {
      description: 'Upper Body',
      exercises: [],
      start: new Date(),
      end: new Date(),
    },
    {
      description: 'Lower Body',
      exercises: [],
      start: new Date(),
      end: new Date(),
    },
    {
      description: 'Full Body',
      exercises: [],
      start: new Date(),
      end: new Date(),
    },
    {
      description: 'Full Body',
      exercises: [],
      start: new Date(),
      end: new Date(),
    },
  ];

  private exerciseService = inject(ExerciseService);

  constructor() {}

  ngOnInit() {
    addIcons({ barbellOutline });
    this.exerciseService.fetchExercises().subscribe((exercises) => {
      this.workouts.forEach((workout) => {
        if (exercises) {
          workout.exercises = exercises;
        }
      });
    });
  }
}
