import { Component } from '@angular/core';
import { Commande } from '../commande';
import { SrvCommandeService } from '../srv-commande.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-commande-id',
  templateUrl: './admin-commande-id.component.html',
  styleUrls: ['./admin-commande-id.component.css']
})
export class AdminCommandeIdComponent {

commande: Commande | any;

  constructor(
    private router: Router,
    private srv: SrvCommandeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
    });

   this.getCommande(id);
    console.log(this.commande)
 }
 async getCommande(id) {
 try {  this.commande = await this.srv.getCommande(id)
   
 } catch (error) {
   console.log(error)
 }

 }

 retour() {
  this.router.navigate(['/admin/commandes']);
}
  
  }

