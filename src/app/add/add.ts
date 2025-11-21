import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtList } from '../art-list';


@Component({
  selector: 'app-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {
  add() {
    this.artlist.arts.push(this.art);
    Number(this.art.price)
    this.art = {
      name: "",
      price: null,
      image: ""
    }
  }

  art = {
    name: "",
    price: null as number | null,
    image: ""
  }

  constructor(public artlist: ArtList) { }

}
