import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import {
  ExerciseExecutionModel,
  ExerciseModel,
  ExerciseService,
  PreviousRouteService,
  WorkoutModel,
} from '../shared';

import { Router } from '@angular/router';
import { ExerciseRegisterModalComponent } from './components/exercise-register-modal/exercise-register-modal.component';
import { ExerciseTableComponent } from './components/exercise-table/exercise-table.component';
import { WorkoutNameModalComponent } from './components/workout-name-modal/workout-name-modal.component';
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
})
export class WorkoutRegisterPage implements OnInit {
  workout?: WorkoutModel;

  private exerciseService = inject(ExerciseService);
  private router = inject(Router);
  private previousRouteService = inject(PreviousRouteService);

  constructor(public modalCtrl: ModalController) {}

  async ngOnInit() {
    addIcons({ add });
    await this.setupModalName();
  }

  async setupModalAddExercise(exerciseName?: string) {
    const modal = await this.modalCtrl.create({
      component: ExerciseRegisterModalComponent,
      componentProps: { name: exerciseName },
    });
    modal.present();
    modal.onWillDismiss().then(({ data, role }) => {
      if (role === 'confirm') {
        this.addExerciseFromModal(data);
      }
    });
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
        this.workout.exercises,
        name
      );
      if (exercise) {
        exercise.executions.push({
          reps: reps,
          weight: weight,
          order: exercise.executions.length,
        });
      } else {
        this.workout.exercises.push({
          name: name,
          order: this.workout.exercises.length,
          executions: [{ order: 0, reps: reps, weight: weight }],
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
      let exercise = filterFirstByName(this.workout.exercises, exerciseName);
      if (exercise) {
        removeFromList(exercise.executions, execution);
        if (exercise.executions.length === 0) {
          removeFromList(this.workout.exercises, exercise);
        }
      }
    }
  }

  async setupModalName() {
    const modal = await this.modalCtrl.create({
      component: WorkoutNameModalComponent,
    });
    if (!this.workout || !this.workout?.description) {
      modal.present();
    }
    modal.onWillDismiss().then(({ data, role }) => {
      if (role === 'confirm') {
        this.addWorkoutName(data);
      } else {
        this.cancelWorkoutName();
      }
    });
  }

  cancelWorkoutName() {
    const lastUrl = this.previousRouteService.getPreviousUrl();

    if (lastUrl) {
      this.router.navigateByUrl(lastUrl);
    }
  }

  addWorkoutName(name: string) {
    this.exerciseService.fetchExercises().subscribe((exercises) => {
      this.workout = {
        description: name,
        start: new Date(),
        exercises: exercises || [],
      };
    });
  }
}
