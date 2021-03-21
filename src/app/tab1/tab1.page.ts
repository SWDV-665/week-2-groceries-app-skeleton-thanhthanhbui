import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesDataService } from '../groceries-data.service';
import { InputDialogueService } from '../input-dialogue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App";

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, public dataSvc: GroceriesDataService, public inputSvc: InputDialogueService) {}

  loadItems() {
    return this.dataSvc.getItems();
  }

  addItem() {
    console.log("Adding Item");
    this.inputSvc.showPrompt();
  }

}
