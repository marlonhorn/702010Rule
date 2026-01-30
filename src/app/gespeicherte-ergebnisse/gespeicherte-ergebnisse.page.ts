import { Component, OnInit } from '@angular/core';
import { Speicher, Rechnung } from '../speicher';

@Component({
  selector: 'app-gespeicherte-ergebnisse',
  templateUrl: './gespeicherte-ergebnisse.page.html',
  styleUrls: ['./gespeicherte-ergebnisse.page.scss'],
  standalone: false,
})
export class GespeicherteErgebnissePage implements OnInit {

  public rechnungen: Rechnung[] = [];

  constructor(private speicher: Speicher) {}

  ngOnInit() {
    this.rechnungenLaden();
  }

  ionViewWillEnter() {
    this.rechnungenLaden();
  }

  public rechnungenLaden() {
    this.rechnungen = this.speicher.getRechnungen();
  }

  public async rechnungLoeschen(id: string) {
    await this.speicher.rechnungLoeschen(id);
    this.rechnungenLaden();
  }

  public async alleLoeschen() {
    await this.speicher.alleLoeschen();
    this.rechnungenLaden();
  }

}
