import { Component, OnInit, Input } from '@angular/core';
import { Publicacao } from '../models/publicacao';
import { PublicacaoService } from '../providers/publicacao/publicacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacao-detail',
  templateUrl: './publicacao-detail.component.html',
  styleUrls: ['./publicacao-detail.component.css']
})
export class PublicacaoDetailComponent implements OnInit {

  publicacao:Publicacao;
  
  constructor(private servicePublicacao:PublicacaoService, private router:Router){
    this.publicacao = new Publicacao();
    
  }
  
  ngOnInit() {
    this.publicacao.id= +sessionStorage.getItem('id');
    this.publicacao.titulo= sessionStorage.getItem('titulo');
    this.publicacao.texto= sessionStorage.getItem('texto');
    this.publicacao.imagem= sessionStorage.getItem('imagem');
  }

  atualizar(publicacao){
    this.servicePublicacao.update(publicacao);
    this.router.navigateByUrl('admin');
  }



  
}
