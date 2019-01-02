import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Ceci est le contenu de mon premier post.'
    },
    {
      title: 'Mon second post',
      content: 'Cela est le contenu de mon second post.'
    },
    {
      title : 'Encore un post',
      content: 'Ceci est le contenu d\'un post supplémentaire, totalement imprévu.'
    }
  ];
}
