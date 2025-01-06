import { ExerciseModel } from 'src/app/shared';

export default function filterFirstByName(
  exercises: ExerciseModel[],
  name: string
): ExerciseModel | null {
  return exercises.filter(
    (e) => e.name.toLowerCase() === name.toLowerCase()
  )[0];
}
