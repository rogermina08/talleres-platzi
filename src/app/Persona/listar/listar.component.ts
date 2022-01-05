import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { convocatorias } from 'src/app/Modelo/convocatorias';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  convocatorias!: convocatorias[];
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getConvocatorias()
    .subscribe(data => {
      this.convocatorias = data
    });
  }
  
  editar(convocatoria: convocatorias): void {
    
    localStorage.setItem("id", convocatoria._id!.toString());
    this.router.navigate(["edit"]);
  }

  eliminar(convocatoria: convocatorias) {
    this.service.deleteConvocatoria(convocatoria._id!.toString())
    .subscribe(data => {
      this.convocatorias = this.convocatorias.filter(p=>p!==convocatorias);
      alert("Se elimino correctamente");
      this.router.navigate(["listar"]);
    })
  }
  nuevo() {
    this.router.navigate(["add"]);
  }
}
