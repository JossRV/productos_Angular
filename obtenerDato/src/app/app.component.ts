import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { articulo } from './interface/articulos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mostrar: boolean = true;
  public articulos: articulo[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    let url = "http://localhost/productos/";
    this.http.get<articulo[]>(url)
      .subscribe(
        resultado => {
          this.articulos = resultado;
          console.log(this.articulos);
          if(this.articulos.length > 0){
            this.mostrar = true;
          }else{
            this.mostrar = false;
          }

          console.log(this.mostrar);
        }
      );
  }
}
