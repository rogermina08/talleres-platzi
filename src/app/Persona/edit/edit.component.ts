import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { convocatorias } from 'src/app/Modelo/convocatorias';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  convocatorias: convocatorias = new convocatorias();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Edit();
  }
  Edit(){
    let d=localStorage.getItem("id"); 
    this.service.getConvocatoria(d??"") 
    .subscribe((data: convocatorias)=>{
      this.convocatorias=data;
    })
  }

  Actualizar(convocatorias: convocatorias){
    this.service.updateConvocatoria(convocatorias)
    .subscribe((data: convocatorias)=>{
      this.convocatorias=data;
      alert("Se actualizo con exito");
      this.router.navigate(["listar"]);
    })
  }
    
}
