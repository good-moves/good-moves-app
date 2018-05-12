import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Tomatentagesplan",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Plane deinen Tag mit Tomaten.",
  };


  constructor() {
    let items = [
      {
        "name": "Tomatentagesplan",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Plane deinen Tag mit Tomaten."
      },
      {
        "name": "Tomatenwochenplan",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Plane deine Woche mit Tomaten."
      },
      {
        "name": "Challenge Wochenplan",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Erstelle 7 Challenges und wähle jeden Tag zufällig eine."
      },
      {
        "name": "Challenge Spielkarten",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Erstelle ein Spielkartendeck mit Challenges, die du dann zufällig auswählen kannst."
      },
      {
        "name": "Meeting Checkin",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Lasse jeden am Anfang eines Meetings ein Checkin machen."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
