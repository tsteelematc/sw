import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { AppStateService } from '../app-state.service';

interface itemDisplay {
  title: string;
  note: string;
  icon: string;
};

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  //public items: Array<{ title: string; note: string; icon: string }> = [];
  //public items: Array<itemDisplay> = [];
  public items: itemDisplay[] = [];
  //public items: any[] = [];
  constructor(private planetSvc: SwapiService, public appStateSvc: AppStateService) {

    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }

  }

  ngOnInit() {

    this.planetSvc.getPlanets().subscribe(
      data => {
        console.log('Got my data');
        console.log(data);

        this.items = [...this.items, ...(<any> data).results.map(x => ({
          title: x.name
          , note: x.gravity
          , icon: 'planet'
        }))];

        //this.items.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 0)));
        this.items.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 :  -1));
      }
    , error => console.log(error)
    );
    
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
