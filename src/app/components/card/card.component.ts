import { Component, OnInit } from '@angular/core';
import { AnimalDescription } from 'src/app/model/animal-description';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public info: AnimalDescription [];
  public megusta: boolean =false;
  public favorito: boolean =false;
  constructor() { 
    this.info=[
      {
        nombre: 'Shiba Inu',
        caracteristicas: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        avatar:"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');background-size: cover",
        imagen:'https://material.angular.io/assets/img/examples/shiba2.jpg',

        tipo:'Dog Breed',
/*         compartir:"https://es.wikipedia.org/wiki/Shiba_Inu" */
      },
      {
        nombre: 'Canario',
        caracteristicas: 'El canario silvestre o serín canario ​ es una especie de ave paseriforme de la familia de los fringílidos. A pesar de su nombre tanto común como científico es autóctono de varios subarchipiélagos de la Macaronesia: las islas Canarias, Azores y Madeira, y no solo de las primeras.',
        avatar:"background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDsiRoDxff3ae7rGempXTiNMmEjGcYbQoMJSU1-EueD8Sf7VaMVVR_NqgcfDzf8mLVbM&usqp=CAU');background-size: cover",
        imagen:'https://www.clarin.com/img/2015/03/19/Hkyaa807g_340x340.jpg',
        tipo:'Ave domestica'
      },
      {
        nombre: 'Conejo',
        caracteristicas: 'Un conejo doméstico o domesticado, más comúnmente conocido como conejo mascota, conejito, moño o conejito, es una subespecie del conejo europeo, miembro de la familia de los lagomorfos. Un conejo macho se conoce como macho, una hembra es una cierva y un conejo joven es un kit o gatito.',
        avatar:"background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1d4w4HcdymjcKbF8I3OtwsXaKrPkGYE0nPAuIQjPVAyStT3SIR9i_d14ib2vnQrE6Nk&usqp=CAU');background-size: cover",
        imagen:'https://zooguadalajaramxa.imgix.net/animal/218/foto-one.jpeg',
        tipo:'Conejo Domestico'
      },
      {
        nombre: 'Micropachycephalosaurus hongtuyanensis',
        caracteristicas: 'Micropachycephalosaurus hongtuyanensis es la única especie conocida del género extinto Micropachycephalosaurus de dinosaurio ornitisquio ceratopsiano que vivió a finales del período Cretácico, hace aproximadamente 83 y 71 millones de años, ​ en el Campaniense, en lo que hoy es Asia.',
        avatar:"background-image: url('https://i.pinimg.com/originals/96/6a/13/966a13fab073fef0d88837e56eaf3bc1.jpg');background-size: cover",
        imagen:'https://mobile.nhmc.uoc.gr/sites/default/files/mikropachikelosavros.jpg',
        tipo:'Reptil no domestico'
      },
      {
        nombre: 'Extraterrestre',
        caracteristicas: 'En la cultura popular y en la ufología, se denomina extraterrestre a todo ser vivo originario de cualquier sitio ajeno a la Tierra.​ La mayor parte de las personas solo tiene en cuenta esta definición al referirse a los seres provenientes del espacio exterior.',
        avatar:"background-image: url('https://estaticos-cdn.sport.es/clip/e3266951-caad-4f88-b0ce-ab4757d73a32_alta-libre-aspect-ratio_default_0.jpg');background-size: cover",
        imagen:'https://finde.latercera.com/wp-content/uploads/2021/08/Ovnis-Proyectos-de-Alto-Secreto-Desclasificados-700x450.jpg',
        tipo:'No recomendable como mascota '
      },
      {
        nombre: 'Koi',
        caracteristicas: 'Se denomina comúnmente carpas koi, peces koi, nishikigoi o simplemente koi al conjunto informal que componen todas las coloridas variedades domésticas de carpas comunes, que fueron desarrolladas en Asia por selección, partiendo de especímenes que presentaban el fenotipo silvestre. ',
        avatar:"background-image: url('https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/01/22/pez-koi.jpeg  ');background-size: cover",
        imagen:'https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/09/colored-carp-1447341_640.jpg',
        tipo:'Carpas koi'
      }
    ]
  }

  ngOnInit(): void {
  }

  darlike(){
    this.megusta=true;
  }

  darfav(){
    this.favorito=true;
  }

}