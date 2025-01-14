import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  ExerciseExecutionModel,
  ExerciseModel,
  ExerciseService,
  WorkoutModel,
} from '@shared';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseRegisterModalComponent } from './components/exercise-register-modal/exercise-register-modal.component';
import { ExerciseTableComponent } from './components/exercise-table/exercise-table.component';
import filterFirstByName from './helper/exercise-operation.helper';
import removeFromList from './helper/utils.helper';

@Component({
  selector: 'wl-workout-register',
  templateUrl: './workout-register.page.html',
  standalone: true,
  imports: [
    IonicModule, // IonicModule already include all the components

    CommonModule,
    DatePipe,
    FormsModule,
    ExerciseTableComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutRegisterPage implements OnInit {
  /**
   * TODO
   * create a button to edit the exercise name
   * using the create-outline icon
   */

  workout = signal<WorkoutModel>({ description: '', exercises: [], start: new Date() });

  private readonly exerciseService = inject(ExerciseService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    addIcons({ add });
    const exerciseName =
      this.activatedRoute.snapshot.paramMap.get('workoutName');
    if (exerciseName) {
      this.workout.update(w => {
        w.description = exerciseName;
        return w;
      });
    } else {
      this.router.navigate(['page', 'workout-register-name']);
    }
  }

  async setupModalAddExercise(exerciseName?: string) {
    const modal = await this.modalCtrl.create({
      component: ExerciseRegisterModalComponent,
      componentProps: { name: exerciseName },
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.addExerciseFromModal(data);
    }
    console.log(this.workout());
  }

  addExerciseFromModal({
    name,
    reps,
    weight,
  }: {
    name: string;
    reps: number;
    weight: number;
  }) {
    if (this.workout) {
      let exercise: ExerciseModel | null = filterFirstByName(
        this.workout().exercises,
        name
      );
      if (exercise) {
        exercise.executions.push({
          reps: reps,
          weight: weight,
          order: exercise.executions.length,
        });
      } else {
        this.workout.update(w => {
          w.exercises.push({
            name: name,
            order: this.workout().exercises.length,
            executions: [{ order: 0, reps: reps, weight: weight }],
          });
          return w;
        });
      }
    }
  }

  deleteExecution({
    execution,
    exerciseName,
  }: {
    execution: ExerciseExecutionModel;
    exerciseName: string;
  }) {
    if (this.workout) {
      let exercise = filterFirstByName(this.workout().exercises, exerciseName);
      if (exercise) {
        removeFromList(exercise.executions, execution);
        if (exercise.executions.length === 0) {
          removeFromList(this.workout().exercises, exercise);
        }
      }
    }
  }
}
