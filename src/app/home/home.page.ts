import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  Numerito: number; // Variable para decidir que resultado mostrar en el if
  oxigeno: string;  // Variable donde se muestran los resultados
  color: string; // Variable para el cambio de color en la label de resultados

 datos = {
   numero: 0
 };
//#region Cronometro
 public segundos = 0;
 public contador: any;
 colors = 'success'; // variable para el cambio dinamico de color
 texto = 'Iniciar'; // variable para el texto del boton

public start_stop() {
  if (this.contador === undefined) {
   this.contador = setInterval( () => {this.segundos += 1; }, 1000);
   console.log('Cronometro iniciado');
   this.colors = 'warning'; // cambio de color dinamico del boton iniciar
   this.texto = 'Detener'; // cambio de texto dinamico del boton iniciar
    } else if (this.contador !== undefined) {
      clearInterval(this.contador);
      this.contador = undefined;
      console.log('Cronometro Detenido');
      this.colors = 'success';
      this.texto = 'Iniciar';
    }
  }
  restart() {
    this.segundos = 0;
    console.log('Cronometro Reiniciado');
    this.Numerito = undefined;
    this.oxigeno = undefined;
    this.color = undefined;
  }
//#endregion
 ngOnInit() {
 }
  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.datos);
    this.datos.numero = this.Numerito;
  }
  //#region Mostrar informacion
  Oxigeno() {
    if (this.Numerito < 7 || this.segundos < 5) {
      this.oxigeno = 'Estimación de la saturación de oxígeno es menor a 90%';
      this.color = 'danger';
    } else if (this.Numerito >= 7 && this.Numerito < 10 || this.segundos >= 5 && this.segundos < 7) {
      this.oxigeno = 'Estimación de la saturación de oxígeno es menor a 95%';
      this.color = 'warning';
    } else {
      this.oxigeno = 'Estimación de la saturación de oxígeno es mayor a 95%';
      this.color = 'success';
    }
    if (this.Numerito > 30 && this.segundos > 0) {
      this.oxigeno = 'NO SE PUEDE INGRESAR UN NÚMERO MAYOR A 30';
      this.color = 'medium';
    }
  }
  //#endregion

}
