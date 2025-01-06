import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  public title: string = 'Not defined';

  constructor() {}

  ngOnInit(): void {}

  closeMenu() {}
}
