import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  text = 'Default text message.';
  isDefault = false;

  onChangeText() {
    this.text = this.isDefault === false ?  'Text is false!' : 'Text is true!';
    this.isDefault = !this.isDefault;
  }

}
