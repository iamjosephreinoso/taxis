import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Taxi } from '../model/taxi';
import { TaxisService } from '../service/taxis.service';

@Component({
  selector: 'app-taxis-operacion',
  templateUrl: './taxis-operacion.page.html',
  styleUrls: ['./taxis-operacion.page.scss'],
})
export class TaxisOperacionPage implements OnInit {
  public listTaxisOperacion: Observable<Taxi[]>;
  constructor(private taxisServicio: TaxisService) { }

  ngOnInit() {
    this.listTaxisOperacion = this.taxisServicio.listaTaxis();
  }

}
