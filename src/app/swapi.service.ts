import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, merge } from 'rxjs';
import { expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  public getPlanets() {
    console.log('getPlanets()');

    //return this.httpSvc.get('https://swapi.co/api/planets');

    // const p1 = this.httpSvc.get('https://swapi.co/api/planets');
    // const p2 = this.httpSvc.get('https://swapi.co/api/planets?page=2');
    // const p3 = this.httpSvc.get('https://swapi.co/api/planets?page=3');
    // const p4 = this.httpSvc.get('https://swapi.co/api/planets?page=4');
    // const p5 = this.httpSvc.get('https://swapi.co/api/planets?page=5');
    // const p6 = this.httpSvc.get('https://swapi.co/api/planets?page=6');
    // const p7 = this.httpSvc.get('https://swapi.co/api/planets?page=7');

    // return merge(p1, p2, p3, p4, p5, p6, p7);


    return this.getPage('https://swapi.co/api/planets')
      .pipe(expand(
        (data, i) => (<any> data).next ? this.getPage((<any> data).next) : empty()
      ))
      ;

    // Pipe in F#
    //this.getPage() |> expand()
  }

  private getPage(pageUrl: string) {    
    return this.httpSvc.get(pageUrl);
  }
}
