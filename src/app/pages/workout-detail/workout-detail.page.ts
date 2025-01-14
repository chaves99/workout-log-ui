import { CommonModule, DatePipe, LocationStrategy } from '@angular/common';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
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
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,

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
  private activatedRoute = inject(ActivatedRoute);
  private locationStrategy = inject(LocationStrategy);

  constructor() {
    addIcons({ barbellOutline, arrowBack });
  }

  ngOnInit() {
    if (!this.workout()) {
      this.router.navigate(['../workout-log'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  sumTotalWeightBy(exercise: ExerciseModel): number {
    return exercise.executions.reduce((prev, current) => {
      let eachTotal = current.reps * current.weight;
      return eachTotal + prev;
    }, 0);
  }

  goBack() {
    if (this.locationStrategy.historyGo) {
      this.locationStrategy.historyGo(-1);
    }
  }
}
