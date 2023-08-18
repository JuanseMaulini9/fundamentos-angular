import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 10;
  name = 'Juanse';
  age = 22;
  img =
    'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/08/one-piece-luffy-gear-5-3108930.jpg?tf=3840x';
  btnDisabled = true;
  person = {
    name: 'Luffy',
    age: 18,
    avatar:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/08/one-piece-luffy-gear-5-3108930.jpg?tf=3840x',
  };
  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  names: string[] = [
    'Luffy',
    'Zoro',
    'Sanji',
    'Nami',
    'Ussop',
    'Chopper',
    'Robin',
    'Franky',
    'Brook',
    'Jimbe',
  ];
  newName = '';

  register = {
    name: '',
    email: '',
    password: '',
  };

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  IncreaseAge() {
    this.person.age++;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  onRegister() {
    console.log(this.register);
  }
}
