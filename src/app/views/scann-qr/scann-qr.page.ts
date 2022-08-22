import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scann-qr',
  templateUrl: './scann-qr.page.html',
  styleUrls: ['./scann-qr.page.scss'],
})
export class ScannQrPage implements OnInit {

  public code: string;

  constructor(
    private barcodeScanner: BarcodeScanner,
    ) {
  }

  ngOnInit() {
  }

  async scan() {
    console.log('escanear');
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
