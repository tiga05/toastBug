import { ToastService } from './../services/toast.service';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, ToastController, IonInput, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor(private toastService: ToastService) {}

  protected showToast(): void {
    this.toastService.showMessage();
  }
}
