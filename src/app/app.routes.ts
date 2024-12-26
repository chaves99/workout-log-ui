import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { addOutline, listOutline, removeOutline } from 'ionicons/icons';
import { WorkoutLogPage } from './workout-log/workout-log.page';
import { WorkoutRegisterPage } from './workout-register/workout-register.page';

type IconModules = {
  [name: string]: string;
};

const ICON_MODULE_METADATA: IconModules = {
  addOutline,
  listOutline,
  removeOutline,
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

export const routes: Routes = ROUTE_METADATA.routeMenuPath.map((route) => {
  return {
    path: route.routePath,
    component: route.component,
  };
});
