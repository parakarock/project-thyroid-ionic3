import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditiodineresultdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editiodineresultdetail',
  templateUrl: 'editiodineresultdetail.html',
})
export class EditiodineresultdetailPage {
  ThyroidSize:number;
  TT3orfT3:number;
  fT4:number;
  TSH:number;
  ThyroidMed:string;
  ThyroidMedVol:number;
  ThyroidMedRoundPerDay:number;
  ThyroidMedEtc:string;
  BetaBlock:string;
  BetaBlockVol:number;
  BetaBlockRoundPerDay:number;
  BetaBlockEtc:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditiodineresultdetailPage');
  }

  body = JSON.stringify({
    thysize:this.ThyroidSize,
    TT3orfT3:this.TT3orfT3,
    ft4:this.fT4,
    tsh:this.TSH,
    thymed:this.ThyroidMed,
    thyvol:this.ThyroidMedVol,
    thyrou:this.ThyroidMedRoundPerDay,
    beta:this.BetaBlock,
    betavol:this.BetaBlockVol,
    betarou:this.BetaBlockRoundPerDay
  });

  do(){
    
  }

}
