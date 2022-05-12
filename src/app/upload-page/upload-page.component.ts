import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit { 
  public previsualizacion: string;
  public archivos: any = []
  public loading: boolean

  constructor(private sanitizer: DomSanitizer, private rest: RestService) { }

  ngOnInit(): void {
  }

  capturarFile(event): any { //Esta función es para poder capturar o importar imágenes desde los archivos de la computadora
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => { //extraer el base 64 de ese archivo
      this.previsualizacion = imagen.base; //codificación de la imagen en base 64
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado) 
    // console.log(event.target.files);

  }


  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => { //llevar la imagen a base 64 para poder obtener la condificación
   try {                                                                    //de la imagen y poder hacer la previsualización
      const unsafeImg = window.URL.createObjectURL($event); //agarra el evento que le estamos pasando, se crea una función tipo file, la lee 
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg); //y nos devuelve el base 64
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })


  /**
   * Limpiar imagen
   */

  clearImage(): any {
    this.previsualizacion = '';
    this.archivos = [];
  }



  /**
   * Subir archivo
   */

  subirArchivo(): any {
    try {
      this.loading = true; 
      const formularioDeDatos = new FormData(); //iniciar el formulario
      this.archivos.forEach(archivo => { //recorre la variable para saber cuantos archivos se han adjuntado
        formularioDeDatos.append('files', archivo) // aqui le decimos que al formulario le agregue ese archivo en un key que se llame files 
      })                                           // (files es el nombre que la api o servicio pide)
      // formularioDeDatos.append('_id', 'MY_ID_123')// pasar más información o archivos
      this.rest.post(`http://localhost:3001/upload`, formularioDeDatos) //hacer una petición por el método post hacia el servicio de backend al 
        .subscribe(res => {                                             //cual le vamos a enviar el formulario que ya hemos cargado con los archivod
          this.loading = false;
          console.log('Respuesta del servidor', res);                   //cuando los archivos se suben de forma correcta muestra el console log

        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }
}
