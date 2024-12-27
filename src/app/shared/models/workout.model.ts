import { ExerciseModel } from './exercise.model';

export interface WorkoutModel {
  description: string;
  exercises: ExerciseModel[];
  start: Date;
  end?: Date;
  // durationSeconds: number;
}
