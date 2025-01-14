import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { addOutline, listOutline } from 'ionicons/icons';
import { WorkoutLogPage } from './workout-log/workout-log.page';
import { WorkoutRegisterPage } from './workout-register/workout-register.page';
import { PagesComponent } from './pages.component';
import { WorkoutDetailPage } from './workout-detail/workout-detail.page';
import { WorkoutRegisterNamePage } from './workout-register-name/workout-register-name.page';

type IconModules = {
  [name: string]: string;
};

interface RouteMenuPathMetadata {
  title?: string;
  component: Type<any>;
  routePath: string;
  icon?: string;
  showOnMenu: boolean;
}

interface RouteMetadata {
  routeMenuPath: RouteMenuPathMetadata[];
  iconModules: IconModules;
}

export const ROUTE_METADATA: RouteMetadata = {
  routeMenuPath: [
    {
      title: 'New Workout',
      component: WorkoutRegisterNamePage,
      routePath: 'workout-register-name',
      icon: 'add-outline',
      showOnMenu: true,
    },
    {
      title: 'Workout Log',
      component: WorkoutLogPage,
      routePath: 'workout-log',
      icon: 'list-outline',
      showOnMenu: true,
    },
    {
      component: WorkoutDetailPage,
      routePath: 'workout-detail',
      showOnMenu: false,
    },
    {
      component: WorkoutRegisterPage,
      routePath: 'workout-register/:workoutName',
      showOnMenu: false,
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

export const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [...metadataRoutes],
  },
];
