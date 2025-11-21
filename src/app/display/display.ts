import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtList } from '../art-list';


@Component({
  selector: 'app-display',
  imports: [FormsModule, CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {


  delete(item: any) {
    this.artlist.arts = this.artlist.arts.filter(a => a !== item);
  }
  constructor(public artlist: ArtList) { }
}
