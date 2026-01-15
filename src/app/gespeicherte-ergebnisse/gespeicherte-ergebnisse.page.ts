import { Component, OnInit } from '@angular/core';
import { Speicher } from '../speicher';

@Component({
  selector: 'app-gespeicherte-ergebnisse',
  templateUrl: './gespeicherte-ergebnisse.page.html',
  styleUrls: ['./gespeicherte-ergebnisse.page.scss'],
  standalone: false,
})
export class GespeicherteErgebnissePage implements OnInit {

  constructor(private Speicher: Speicher) { }

  ngOnInit() {
  }

}
