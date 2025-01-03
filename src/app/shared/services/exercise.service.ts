import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExerciseModel } from '../models/exercise.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  http = inject(HttpClient);

  constructor() {}

  fetchExercises(): Observable<ExerciseModel[] | null> {
    setTimeout(() => {}, 1000);
    let mocked: ExerciseModel[] = [
      {
        name: 'deadlift',
        executions: [
          {
            reps: 4,
            weight: 110,
            order: 0,
          },
          {
            reps: 5,
            weight: 100,
            order: 1,
          },
          {
            reps: 8,
            weight: 80,
            order: 2,
          },
        ],
        order: 0,
      },
      {
        name: 'squat',
        executions: [
          {
            reps: 4,
            weight: 110,
            order: 0,
          },
          {
            reps: 5,
            weight: 100,
            order: 1,
          },
        ],
        order: 1,
      },
      {
        name: 'bench',
        executions: [
          {
            reps: 4,
            weight: 110,
            order: 0,
          },
          {
            reps: 5,
            weight: 100,
            order: 1,
          },
        ],
        order: 2,
      },
    ];
    return of(mocked);
  }
}
