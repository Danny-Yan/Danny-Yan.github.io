import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnInit {
  public modeChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit() {
      localStorage.getItem('darkMode') === 'true' ? this.setDarkMode(true) : this.setDarkMode(false);
      console.log(localStorage.getItem('darkMode'));
  }

  isDarkMode() {
    return this.modeChange.value;
  }

  setDarkMode(isDarkMode: boolean) {
    this.modeChange.next(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}