import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../providers/usuario/usuario.service';
import { Usuario } from '../models/usuario';
import { Publicacao } from '../models/publicacao';
import { PublicacaoService } from '../providers/publicacao/publicacao.service';
import { Http } from '@angular/http';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  publicacao:Publicacao;
  publicacoes:Publicacao[];
  
  id:number=+sessionStorage.getItem('id');
  nome:string=sessionStorage.getItem('nome');
  sobrenome:string=sessionStorage.getItem('sobrenome');
  
  constructor(private usuarioService:UsuarioService, private publicacaoService:PublicacaoService,
  private router:Router){
      this.publicacao= new Publicacao();
  }

  ngOnInit() {
        this.carregaUserPublicacao();
  }

  carregaUserPublicacao(){
    this.publicacaoService.findBycode(this.id).subscribe(res=>{
      this.publicacoes=res.json();
    });
  }

  logout(){
    this.usuarioService.logout();
  }

  deletar(id){
    this.publicacaoService.delete(id);
    window.location.reload();
  }

  gravar(publicacao){
    this.publicacaoService.create(publicacao, this.id);
    this.publicacao = new Publicacao();
    window.location.reload();
  }

  //falta fazer
  editar(item){
    sessionStorage.setItem('titulo',item.titulo.toString());
    sessionStorage.setItem('imagem',item.imagem.toString());
    sessionStorage.setItem('texto',item.texto.toString());
    this.router.navigateByUrl('publicacao-detail');
  };

}
