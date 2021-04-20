import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {
    SplashScreen.hide();
    this.initializeApp();
  }

  async initializeApp(){
    this.router.navigateByUrl('splash');
  }


}
