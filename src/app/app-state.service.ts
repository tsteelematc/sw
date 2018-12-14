import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  public title: string = "Planet List";
}
