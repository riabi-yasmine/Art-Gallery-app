import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  imports: [FormsModule, CommonModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  user = {
    name: 'Suzy',
    age: 23,
    image: 'https://i.pinimg.com/736x/48/17/75/481775197efbbe9ca9bc2c8b6285a2ce.jpg'
  }
  myname = '';

  change() {
    this.user.name = this.myname;

  }
  etat="Afficher l'image";
  display = false;
  changeState() {
    this.display = !(this.display);
    this.etat= this.etat=="Afficher l'image"? "Masquer l'image": "Afficher l'image";
  }

  students=[
    {
      name:'Sarah',
      age:17
    },
    {
      name:'Ali',
      age:20
    },
    {
      name:'Salma',
      age:19
    },
    {
      name:'Ahmed',
      age:18
    }
  ]
  color="white";
  bgcolor="red";
  switchColor(){
    this.bgcolor = this.bgcolor == 'red' ? 'green' : 'red';
  }
}
