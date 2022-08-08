import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.page.html',
  styleUrls: ['./menu-usuario.page.scss'],
})
export class MenuUsuarioPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(true);
  }

}
