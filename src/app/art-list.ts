import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArtList {
  arts: any[] = [
    { name: "Ocean’s Breath", price: 25, image: "https://i.pinimg.com/736x/a1/eb/af/a1ebaf0eddc08ce82f07c14f79af1e76.jpg" },
    { name: "AquaMuse", price: 115, image: "https://i.pinimg.com/1200x/54/aa/fd/54aafda4f7153a47eaa0f71abae5d29f.jpg" },
    { name: "Mistveil", price: 75, image: "https://i.pinimg.com/736x/51/d6/13/51d613a86f9dcd7bdceb095ebf75f59d.jpg" },
    { name: "Purple Whisper", price: 90, image: "https://i.pinimg.com/736x/ed/64/cb/ed64cb7407dfdf0d88a1c6e468a042cb.jpg" }
  ];
  
}
