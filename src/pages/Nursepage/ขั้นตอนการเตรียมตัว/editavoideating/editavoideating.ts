import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditavoideatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editavoideating',
  templateUrl: 'editavoideating.html',
})
export class EditavoideatingPage {

  myDate:String;
  AfterIngestion:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditavoideatingPage');
  }
  do(){
    let body = JSON.stringify({
     
      myDate: this.myDate,
      AfterIngestion:this.AfterIngestion
    });
  }
}
