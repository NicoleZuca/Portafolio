import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image:string;
  
  constructor(private servicioFavorito: ServicioDeFavoritosService) { }
 //El constructor es para que CardComponent tenga acceso a los métodos públicos de los servicios de favoritos
  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354'
    // console.log('Entrando data:',this.dataEntrante);
    
  }

  agregarFavorito(){
    // console.log(this.dataEntrante);
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
    
  }

}