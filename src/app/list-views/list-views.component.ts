import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent implements OnInit {
  @Input('mode') mode:string = 'page'
  @ViewChild('imageTmpl', { static: true }) imageTmpl: TemplateRef<any>;
  @ViewChild('titleTmpl', { static: true }) titleTmpl: TemplateRef<any>;
  @ViewChild('viewTmpl', { static: true }) viewTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl', { static: true }) hdrTpl: TemplateRef<any>;

  data = []; //lineas //Los datatable ayudan a organizar los datos de forma alfabética o de mayor a menor dependiendo de los datos que se esten expresando
  cols = []; //titulos

  ColumnMode = ColumnMode;


  constructor(private RestService:RestService) {
  
  }

  ngOnInit(): void {
    this.cols = [
      {
        cellTemplate: this.imageTmpl,
        headerTemplate: this.hdrTpl,
        name: 'image',
        maxWidth:180
      },
      {
        cellTemplate: this.titleTmpl,
        headerTemplate: this.hdrTpl,
        name: 'title'
      },
      {
        cellTemplate: this.viewTmpl,
        headerTemplate: this.hdrTpl,
        name: 'views'
      }
    ];

    this.cargarData()
  }
f
  cargarData(): void {
    this.RestService.getAll()
    .subscribe((data:any) => {
      this.data = data
    })
  }

}
