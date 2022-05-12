import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta: any = [];
  public comentarios: any = [];
  comentarioText: string;
  public form: FormGroup;

  constructor(private route: ActivatedRoute, private RestService: RestService,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      console.log(paramMap.variable);
      //this.cargarData(params.variable)
      //this.cargarComentarios();
    })

    this.form = this.formBuilder.group({
      textAreaComentario: ['']
    });
  }

  cargarData(id: string) {
   /* return this.RestService.get(`http://localhost:3000/posts/${id}`) //pasar el id por parametro
      .subscribe(respuesta => {
        console.log('resultado de consulta',respuesta)
        this.respuesta = respuesta;
      })*/
  } //filtro por ID

  cargarComentarios() {
    /*this.RestService.get(`http://localhost:3000/comments`)
      .subscribe(respuesta => {
        this.comentarios = respuesta;
      })*/
  }

  public enviarData() {
    this.RestService.post(`http://:3000/comments`,
      {
        text: this.form.value.textAreaComentario
      }
    )
      .subscribe(respuesta => {
        console.log('Comentario enviado!!!');
        this.form.reset();
        this.cargarComentarios();

      })
  }
}