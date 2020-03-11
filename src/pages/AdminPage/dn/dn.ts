import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdddatauserPage } from "../adddatauser/adddatauser";
/**
 * Generated class for the DnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dn',
  templateUrl: 'dn.html',
})
export class DnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DnPage');
  }
  adddatauser(){
    this.navCtrl.push(AdddatauserPage)
     
   }
}
