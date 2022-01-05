import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { convocatorias } from 'src/app/Modelo/convocatorias';
import { ServiceService } from 'src/app/Service/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  convocatorias: convocatorias = new convocatorias();
  constructor(private service: ServiceService, private router: Router, private forms: FormsModule) { }

  ngOnInit(): void {
    
  }
  Guardar() {
    var paso = true;
    this.service.getConvocatorias().subscribe(data => {
      let  buscar = data.find(x => x.nombre == this.convocatorias.nombre);  
      if (buscar?.nombre != null) {
        paso = false;
        alert("Ya existe una convocatoria con ese nombre");
      }else {
        this.service.createConvocatoria(this.convocatorias)
        .subscribe((data: any)=>{
          alert("Se agrego con exito");
          this.router.navigate(["listar"]);
        });
      }
    });
   
  }

}
