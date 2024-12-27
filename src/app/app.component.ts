import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonRouterLink,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ROUTE_METADATA } from './app.routes';
import { PreviousRouteService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('ionMenu') ionMenu?: IonMenu;

  public title: string = 'Not defined';

  public appPages = ROUTE_METADATA.routeMenuPath;

  private previousRouteService = inject(PreviousRouteService);

  constructor() {}

  ngOnInit(): void {
    addIcons(ROUTE_METADATA.iconModules);
  }

  closeMenu() {
    this.ionMenu?.close();
  }
}
