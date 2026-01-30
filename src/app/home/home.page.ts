import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public einkommenNetto: number | null = null;
  public einkommenNettoFormatted: string = '';
  public frequenz: string = 'monthly';
  public zeigeKategorien: boolean = false;

  constructor(private alertController: AlertController,
              private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.reset();
  }

  public reset() {
    this.einkommenNetto = null;
    this.einkommenNettoFormatted = '';
    this.frequenz = 'monthly';
    this.zeigeKategorien = false;
  }

  public formatierePunkteEingabe(eingabe: string) {
    const ohneFormatierung = eingabe.replace(/\./g, '');
    const alsZahl = parseFloat(ohneFormatierung) || null;
    this.einkommenNetto = alsZahl;
    
    if (ohneFormatierung) {
      const formatiert = ohneFormatierung.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.einkommenNettoFormatted = formatiert;
    }
  }

  public berechnen() {
    if (this.einkommenNetto === 0 || this.einkommenNetto === undefined || this.einkommenNetto === null) {
      this.showAlert('Fehler', 'Bitte geben Sie ein Einkommen ein!');
      return;
    }

    if (isNaN(this.einkommenNetto)) {
      this.showAlert('Fehler', 'Das Einkommen muss eine gültige Zahl sein!');
      return;
    }

    if (this.einkommenNetto < 0) {
      this.showAlert('Fehler', 'Das Einkommen kann nicht negativ sein!');
      return;
    }

    if (this.einkommenNetto > 1000000) {
      this.showAlert('Fehler', 'Das Einkommen ist zu hoch! Bitte geben Sie einen realistischen Wert ein. (<= 1.000.000)');
      return;
    }

    let einkommen = this.einkommenNetto;

    if (this.frequenz === 'annual') {
      einkommen = this.einkommenNetto / 12;
    }
    console.log('Einkommen für Berechnung:', einkommen);

    this.navCtrl.navigateForward('/ergebnis', {
      queryParams: {
        einkommen: einkommen,
        frequenz: this.frequenz,
        zeigeKategorien: String(this.zeigeKategorien)
      }
    });
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}


