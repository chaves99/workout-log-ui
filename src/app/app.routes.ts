import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { addOutline, listOutline } from 'ionicons/icons';
import { WorkoutLogPage } from './workout-log/workout-log.page';
import { WorkoutRegisterPage } from './workout-register/workout-register.page';
import { WorkoutDetailPage } from './workout-detail/workout-detail.page';

type IconModules = {
  [name: string]: string;
};

interface RouteMenuPathMetadata {
  title: string;
  component: Type<any>;
  routePath: string;
  icon: string;
}

interface RouteMetadata {
  routeMenuPath: RouteMenuPathMetadata[];
  iconModules: IconModules;
}

export const ROUTE_METADATA: RouteMetadata = {
  routeMenuPath: [
    {
      title: 'New Workout',
      component: WorkoutRegisterPage,
      routePath: 'workout-register',
      icon: 'add-outline',
    },
    {
      title: 'Workout Log',
      component: WorkoutLogPage,
      routePath: 'workout-log',
      icon: 'list-outline',
    },
  ],
  iconModules: { listOutline, addOutline },
};

const metadataRoutes = ROUTE_METADATA.routeMenuPath.map((route) => {
  return {
    path: route.routePath,
    component: route.component,
  };
});

export const routes: Routes = [
  ...metadataRoutes,
  {
    path: 'workout-detail',
    loadComponent: () =>
      import('./workout-detail/workout-detail.page').then(
        (m) => m.WorkoutDetailPage
      ),
    // component: WorkoutDetailPage,
  },
];
