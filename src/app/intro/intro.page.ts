import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      img:"https://cdn-icons-png.flaticon.com/512/2038/2038116.png",
      title:"Tu Biblioteca virtual",
      subtitle:"Disfruta de tus libros favoritos"
    },
    {
      img:"https://cdn-icons-png.flaticon.com/512/2888/2888432.png",
      title:"Busca nuevos Libros",
      subtitle:"Explora y encuentras nuevos libros para aprender y leer"
    },
    {
      img:"https://cdn-icons-png.flaticon.com/512/3574/3574729.png",
      title:"Lee donde quieras sin interrucion",
      subtitle:"Descarga todos tus libros favoritos y lee los donde tu quieras"
    },
    {
      img:"https://cdn-icons-png.flaticon.com/512/5736/5736758.png",
      title:"Audio Libros",
      subtitle:"Encuentra los mejores audio libros"
    }

  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
