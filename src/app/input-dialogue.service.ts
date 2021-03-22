import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesDataService } from './groceries-data.service';


@Injectable({
  providedIn: 'root'
})
export class InputDialogueService {

  constructor(public alertController: AlertController, public dataSvc: GroceriesDataService) {
    console.log('Utilizing InputDialogue Service');
  }


}
