import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  const firebaseConfig = {
    apiKey: "AIzaSyBJfci8NZojhqo5ssiBr_4iOjf1lsfHFnM",
    authDomain: "movieexsd.firebaseapp.com",
    projectId: "movieexsd",
    storageBucket: "movieexsd.appspot.com",
    messagingSenderId: "859772384413",
    appId: "1:859772384413:web:54ed82db1afeaf38ad1074",
    measurementId: "G-CQ33ZNW03S"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);