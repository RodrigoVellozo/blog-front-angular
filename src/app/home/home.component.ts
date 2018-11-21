import { Component, OnInit } from '@angular/core';
import { Publicacao } from '../models/publicacao';
import { PublicacaoService } from '../providers/publicacao/publicacao.service';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../providers/usuario/usuario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicacoes:Publicacao[];
  usuario:Usuario;
  
  constructor(private publicacaoService:PublicacaoService, private usuarioService:UsuarioService) {
    this.usuario= new Usuario();
  }

  ngOnInit() {
    this.carregarPublicacoes();
  }

  save(usuario){
    this.usuarioService.create(usuario);
    this.usuario= new Usuario;
  }

  carregarPublicacoes(){
    return this.publicacaoService.findAll().subscribe(res=>{
      this.publicacoes=res.json();
    });
  }

  logar(usuario){
    this.usuarioService.login(usuario);
    this.usuario=new Usuario();
  }
  logout(){
    this.usuarioService.logout();
  }

}
