import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //attributs
  taille:number;
  poids:number;
  imc:number;
  tranche;

  //constructor - OnInit
  constructor(private router:Router, public route:ActivatedRoute) {
  }

  //méthodes
  onCalcul()
  {
    this.imc = Math.round(((this.poids)/(this.taille * this.taille))*100)/100;
    this.router.navigate(['/resultat', this.imc]);
    this.poids = null;
    this.taille = null;
  }
}
