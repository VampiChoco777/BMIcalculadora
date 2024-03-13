import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  edad: number = 25;
  peso: number = 60;
  altura: number = 130;
  sexo: string = 'Masculino';

  cambiarAltura(event: any) {
    console.log(event.target.value);
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['./resultado', BMI.toFixed(1)]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}
