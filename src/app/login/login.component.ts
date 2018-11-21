import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../providers/usuario/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;
  usuarios:Usuario[];
  
  constructor(public service:UsuarioService) {
    this.usuario= new Usuario();
  }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios(){
    return  this.service.findAll().subscribe(
      (data:Usuario) => this.usuario={...data}  
    );
  }

  logar(usuario){
    console.log(usuario.email);
    console.log(usuario.senha);
    this.service.login(usuario);
  
  };
    
    
  


}
