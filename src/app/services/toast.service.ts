import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  public async showMessage(): Promise<void> {

    const toast = await this.toastController.create({
        message: "TEST",
        duration: 4000,
        color: "success",
        position: 'bottom',
        positionAnchor: 'footerAnchor'
    });
    toast.present();
}
}
