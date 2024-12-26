export interface ExerciseModel {
  name: string;
  executions: ExerciseExecutionModel[];
  order: number;
}

export interface ExerciseExecutionModel {
  reps: number;
  weight: number;
  order: number;
}
