import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;

  @Input() postContent: string;

  loveClick: number = 0;

  dontLoveClick : number = 0;

  loveIts: number = 0;

  created_at: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  like(){
    this.loveClick = this.loveClick + 1
    this.loveIts = this.loveIts + 1
  }

  dontLike(){
    this.dontLoveClick = this.dontLoveClick + 1
    this.loveIts = this.loveIts - 1
  }

  getBackgroundColor(){
    if (this.loveIts > 0) {
      return 'greenyellow';
    }
    else if (this.loveIts < 0){
      return 'lightcoral';
    }
  }

  getColor(){
    if (this.loveIts > 0) {
      return 'green';
    }
    else if (this.loveIts < 0){
      return 'darkred';
    }
  }
}
