import { Injectable, signal } from '@angular/core';
import { WorkoutModel } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutSingletonStorageService {
  workout = signal<WorkoutModel | null>(null);

  constructor() {}

  getWorkout() {
    return this.workout();
  }

  setWorkout(workout: WorkoutModel) {
    this.workout.set(workout);
  }
}
