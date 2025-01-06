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
import { PreviousRouteService } from '@shared';
import { addIcons } from 'ionicons';
import { ROUTE_METADATA } from './pages.routes';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
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
export class PagesComponent implements OnInit {
  @ViewChild('ionMenu') ionMenu?: IonMenu;
  public appPages = ROUTE_METADATA.routeMenuPath;

  private previousRouteService = inject(PreviousRouteService);

  constructor() {}

  ngOnInit() {
    addIcons(ROUTE_METADATA.iconModules);
  }

  closeMenu() {
    this.ionMenu?.close();
  }
}
