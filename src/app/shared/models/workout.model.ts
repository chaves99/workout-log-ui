import { ExerciseModel } from './exercise.model';

export interface WorkoutModel {
  description: string;
  exercises: ExerciseModel[];
  start: Date;
  endDate?: Date;
  // durationSeconds: number;
}
