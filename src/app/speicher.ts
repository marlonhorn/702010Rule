import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root',
})
export class Speicher {




} 


/** this.storage.get(abkuerzungNormiert); 

this.storage.set(abkuerzungNormiert, bedeutungenArrayNeu); **/

    /*Was brauche ich: Eine funktion die ein objekt im array speichert, eine funktion die en ganzen array ausliest, eine funktion, Eine funktion die letztes obekt im array löscht, eine funktion die alle objekte im array löscht. */ 


   /* public async speichereBedeutungFuerAbkuerzung(abkuerzung: string, bedeutung: string): Promise<number> {

      let bedeutungenArrayNeu = null;

      let bedeutungenArrayAlt = await this.holeBedeutungenFuerAbk(abkuerzung);

      const abkuerzungNormiert = abkuerzung.trim().toUpperCase();

      if (bedeutungenArrayAlt === null || bedeutungenArrayAlt === undefined) {

          // Für die Abkürzung ist noch überhaupt keine Bedeutung gespeichert

          bedeutungenArrayNeu = [ bedeutung ];

          await this.storage.set(abkuerzungNormiert, bedeutungenArrayNeu);

          return 1;

        } else { // Für die Abkürzung war schon mindestens eine Bedeutung abgespeichert

          bedeutungenArrayNeu = bedeutungenArrayAlt;
          bedeutungenArrayNeu.push(bedeutung);

          await this.storage.set(abkuerzungNormiert, bedeutungenArrayNeu);

          return bedeutungenArrayNeu.length;
        }
    }

} */ 
