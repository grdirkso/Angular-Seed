import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {

  gteTitle(): string {
    return 'Welcome to Angular Seed';
  }
  constructor() { }
}
