import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ergebnis',
  templateUrl: './ergebnis.page.html',
  styleUrls: ['./ergebnis.page.scss'],
  standalone: false,
})

export class ErgebnisPage implements OnInit {

  public einkommenNetto: number = 0;
  public gesamterGrundbedarf70: number = 0;

  public sparenUndSchulden20: number = 0;
  public lifestyleInvestments10: number = 0;

  public Wohnen: number = 0;
  public Essen: number = 0;
  public Transport: number = 0;
  public Nebenkosten: number = 0;
  public Versicherungen: number = 0;

  public showKategorien: boolean = false;
  public frequenz: string = 'monthly';

  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['einkommen']) {
        this.einkommenNetto = parseFloat(params['einkommen']);
        this.frequenz = params['frequenz'] || 'monthly';
        this.showKategorien = params['showKategorien'] === 'true';
        this.calcPercentiles100();
      }
    });
  }

  public calcPercentiles100() {
    this.gesamterGrundbedarf70 = this.einkommenNetto * 0.7;
    this.sparenUndSchulden20 = this.einkommenNetto * 0.2;
    this.lifestyleInvestments10 = this.einkommenNetto * 0.1;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
  }

  public neuLaden() {
    this.einkommenNetto = 0;
    this.gesamterGrundbedarf70 = 0;
    this.sparenUndSchulden20 = 0;
    this.lifestyleInvestments10 = 0;
    this.Wohnen = 0;
    this.Essen = 0;
    this.Transport = 0;
    this.Nebenkosten = 0;
    this.Versicherungen = 0;
    this.navCtrl.navigateBack('/home');
  }

}




















  /* public calcPercentiles70() {
    this.einkommenNetto = this.gesamterGrundbedarf70 / 0.7;
    this.sparenUndSchulden20 = this.einkommenNetto * 0.2;
    this.lifestyleInvestments10 = this.einkommenNetto * 0.1;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
  }

  public calcPercentiles20() {
    this.einkommenNetto = this.sparenUndSchulden20 / 0.2;
    this.gesamterGrundbedarf70 = this.einkommenNetto * 0.7;
    this.lifestyleInvestments10 = this.einkommenNetto * 0.1;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
  }

  public calcPercentiles10() {
    this.einkommenNetto = this.lifestyleInvestments10 / 0.1;
    this.sparenUndSchulden20 = this.einkommenNetto * 0.2;
    this.gesamterGrundbedarf70 = this.einkommenNetto * 0.7;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
  }

  public calcPercentilesWohnen() {
    this.gesamterGrundbedarf70 = this.Wohnen / 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
    this.calcPercentiles70();
  }

  public calcPercentilesEssen() {
    this.gesamterGrundbedarf70 = this.Essen / 0.2;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
    this.calcPercentiles70();
  }

  public calcPercentilesTransport() {
    this.gesamterGrundbedarf70 = this.Transport / 0.15;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
    this.calcPercentiles70();
  }

  public calcPercentilesNebenkosten() {
    this.gesamterGrundbedarf70 = this.Nebenkosten / 0.15;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Versicherungen = this.gesamterGrundbedarf70 * 0.1;
    this.calcPercentiles70();
  }

  public calcPercentilesVersicherungen() {
    this.gesamterGrundbedarf70 = this.Versicherungen / 0.1;
    this.Wohnen = this.gesamterGrundbedarf70 * 0.4;
    this.Essen = this.gesamterGrundbedarf70 * 0.2;
    this.Transport = this.gesamterGrundbedarf70 * 0.15;
    this.Nebenkosten = this.gesamterGrundbedarf70 * 0.15;
    this.calcPercentiles70();
  }
 */