import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {

  @Input() urlCustom: string 
  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  cargarImagenPorDefecto() {
    const element = this.elementRef.nativeElement
    element.src = this.urlCustom || `https://piotrkowalski.pw/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png`
    //src es el atributo nativo de la etiqueta img que le da la fuente o de donde va a jalar la imagen, entonces le indicamos que si URL existe
    //la asigne y sino que me asigne esa URL
  }


}
