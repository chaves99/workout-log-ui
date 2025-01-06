import { CommonModule, DatePipe } from '@angular/common';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExerciseModel, WorkoutSingletonStorageService } from '@shared';

import { addIcons } from 'ionicons';
import { arrowBack, barbellOutline } from 'ionicons/icons';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.page.html',
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonItemDivider,
    IonList,
    IonLabel,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,

    DatePipe,
    CommonModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkoutDetailPage implements OnInit {
  workout = computed(() => this.workoutSingletonStorageService.getWorkout());

  private workoutSingletonStorageService = inject(
    WorkoutSingletonStorageService
  );
  private router = inject(Router);

  constructor() {
    addIcons({ barbellOutline, arrowBack });
  }

  ngOnInit() {
    addIcons({ barbellOutline });
    if (!this.workout()) {
      this.router.navigateByUrl('workout-log');
    }
  }

  sumTotalWeightBy(exercise: ExerciseModel): number {
    return exercise.executions.reduce((prev, current) => {
      let eachTotal = current.reps * current.weight;
      return eachTotal + prev;
    }, 0);
  }

  goBack() {}
}
