import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  add() {
    this.arts.push(this.art);
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

  arts: any[] = [
    { name: "Ocean’s Breath", price: 25, image: "https://i.pinimg.com/736x/a1/eb/af/a1ebaf0eddc08ce82f07c14f79af1e76.jpg" },
    { name: "AquaMuse", price: 115, image: "https://i.pinimg.com/1200x/54/aa/fd/54aafda4f7153a47eaa0f71abae5d29f.jpg" },
    { name: "Mistveil", price: 75, image: "https://i.pinimg.com/736x/51/d6/13/51d613a86f9dcd7bdceb095ebf75f59d.jpg" },
    { name: "Purple Whisper", price: 90, image: "https://i.pinimg.com/736x/ed/64/cb/ed64cb7407dfdf0d88a1c6e468a042cb.jpg" }
  ];


  delete(item: any) {
    this.arts = this.arts.filter(a => a !== item);
  }

}
