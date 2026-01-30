import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Rechnung {
  id: string;
  einkommen: number;
  gesamterGrundbedarf70: number;
  sparenUndSchulden20: number;
  lifestyleInvestments10: number;
  wohnen: number;
  essen: number;
  transport: number;
  nebenkosten: number;
  versicherungen: number;
  datum: Date;
  zeigeKategorien: boolean;
  kommentar: string;
}

@Injectable({
  providedIn: 'root',
})
export class Speicher {

  private rechnungen: Rechnung[] = [];

  constructor(private storage: Storage) {
    this.storage.create();
    this.rechnungenLaden();
  }

  async addRechnung(rechnung: Rechnung): Promise<void> {
    this.rechnungen.push(rechnung);
    await this.storage.set('rechnungen', this.rechnungen);
  }

  getRechnungen(): Rechnung[] {
    return this.rechnungen;
  }

  async rechnungLoeschen(id: string): Promise<void> {
    this.rechnungen = this.rechnungen.filter(r => r.id !== id);
    await this.storage.set('rechnungen', this.rechnungen);
  }

  async alleLoeschen(): Promise<void> {
    this.rechnungen = [];
    await this.storage.set('rechnungen', []);
  }

  private async rechnungenLaden(): Promise<void> {
    const data = await this.storage.get('rechnungen');
    if (data) {
      this.rechnungen = data;
    }
  }
}