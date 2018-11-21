import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string="http://localhost:8080/projBlog/rest/usuarios";
  user:Usuario;
  constructor(private http:HttpClient, private route:Router) { 

  }

  findAll(){
    return this.http.get<Usuario>(this.url);
  }

  findById(id:number){
    return this.http.get(this.url+'/'+id);
  }

  create(user:Usuario){
    this.http.post(this.url,user).subscribe();
  }

  login(usuario:Usuario){
    this.http.get<Usuario[]>(this.url).subscribe(res=>{
      
      let logado:Usuario = res.find((item)=>{

        return item.email == usuario.email && item.senha == usuario.senha;
      
      })
      if(logado){
        console.log(logado.id);

        sessionStorage.setItem('id', logado.id.toString()    );
        sessionStorage.setItem('nome', logado.nome.toString());
        sessionStorage.setItem('sobrenome', logado.sobrenome.toString());
        
        this.route.navigateByUrl('/admin');
      }else{
        alert('login Inválido');
      }
    })
    
  }

  logout(){
    sessionStorage.removeItem('currentUser');
    this.route.navigateByUrl('');
  }


}
