import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle } from '@ionic/angular/standalone';
import {
  ExerciseService,
  WorkoutModel,
  WorkoutSingletonStorageService,
} from '@shared';
import { addIcons } from 'ionicons';
import { arrowForwardOutline, barbellOutline } from 'ionicons/icons';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.page.html',
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,

    CommonModule,
    FormsModule,

    WorkoutCardComponent,
  ],
})
export class WorkoutLogPage implements OnInit {
  now = new Date();

  public workouts: WorkoutModel[] = [
    {
      description: 'Upper Body',
      exercises: [],
      start: this.now,
      end: plusDate(1.5),
    },
    {
      description: 'Lower Body',
      exercises: [],
      start: new Date(),
      end: plusDate(0.8),
    },
    {
      description: 'Full Body',
      exercises: [],
      start: new Date(),
      end: plusDate(1.9),
    },
    {
      description: 'Full Body',
      exercises: [],
      start: new Date(),
      end: plusDate(1),
    },
  ];

  private exerciseService = inject(ExerciseService);
  private router = inject(Router);
  private workoutSingletonStorageService = inject(
    WorkoutSingletonStorageService
  );

  constructor() {
    addIcons({ arrowForwardOutline, barbellOutline });
  }

  ngOnInit() {
    addIcons({ barbellOutline, arrowForwardOutline });
    this.exerciseService.fetchExercises().subscribe((exercises) => {
      this.workouts.forEach((workout) => {
        if (exercises) {
          workout.exercises = exercises;
        }
      });
    });
  }

  goToDetail(workout: WorkoutModel) {
    this.workoutSingletonStorageService.setWorkout(workout);
    this.router.navigateByUrl('workout-detail');
  }
}

function plusDate(hourDelay: number): Date {
  let date = new Date();
  let mili = date.getTime();
  date.setTime(mili + 1000 * 60 * 60 * hourDelay);
  return date;
}
