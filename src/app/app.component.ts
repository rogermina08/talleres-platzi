import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceService]
})
export class AppComponent {
  title = 'convocatorias';
  constructor(private router: Router ) {
    
   }
  Listar() {
    this.router.navigate(['/listar']);
  }
  Crear() {
    this.router.navigate(['/add']);
  }
}
