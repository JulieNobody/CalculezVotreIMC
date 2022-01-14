import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent implements OnInit {

  imc;
  tranche;
  conseil;
  conseilIcon;

  reponse = {imc:'', tranche:'', conseil:'' , conseilIcon:'' , visibility:''};
  erreur = {text:'' , visibility:''};

  constructor(private router:Router, public route:ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) =>{
      this.imc = params['id'];
      });

    if(this.imc !== "NaN"  ){

      if (this.imc < 18.5 )
      {
        this.tranche = "éblouissant.e";
        this.conseil = "Si tu essayes toujours d'être normal, tu ne sauras jamais à quel point tu peux être incroyable !";
        this.conseilIcon = "flame-outline";
      }else{

        if (this.imc < 24.9 )
        {
          this.tranche = "fantastique"
          this.conseil = "Tu seras inarrêtable quand tu réaliseras que tu mérites mieux !";
          this.conseilIcon = "balloon-outline";
        }else
        {
          if (this.imc < 29.9 )
          {
            this.tranche = "fabuleux.se"
            this.conseil = "Soit patient.e avec toi-même, rien dans la nature ne fleurit toute l’année !";
            this.conseilIcon = "rose-outline";
          }else{
            this.tranche = "merveilleux.se"
            this.conseil = "Rappelle-toi quand tu voulais ce que tu as actuellement !";
            this.conseilIcon = "sunny-outline";
          }
        }
      }
      this.reponse = {
        imc: this.imc,
        tranche: this.tranche,
        conseil: this.conseil,
        conseilIcon: this.conseilIcon,
        visibility:"visible"
      };
      this.erreur = {text:"" ,visibility:"invisible"};

    }else{
      this.reponse = {
        imc:"",
        tranche: "",
        conseil: "",
        conseilIcon: "",
        visibility:"invisible"
      };

      this.erreur = {
        text:"Tu as oublié de saisir des données, retourne vite à l'accueil !" ,
        visibility:"visible"
      };
    }

  }

}
