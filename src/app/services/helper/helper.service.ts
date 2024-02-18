import { Injectable } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
      private readonly toastController: ToastController,
  ) { }

  public async showToast(message: string, duration: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
      message,
      position: "bottom",
      duration,
      cssClass: 'toast-center'
    });

    await toast.present();
  }
}
