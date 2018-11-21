import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Publicacao } from 'src/app/models/publicacao';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {

  private url:string="http://localhost:8080/projBlog/rest/publicacoes";

  constructor(private http:Http) { }

  findAll(){
    return this.http.get(this.url);
  }

  findBycode(id:number){
    return this.http.get(this.url+'/'+id);
  }

  create(publicacao:Publicacao, id:number){
    this.http.post(this.url+'/'+id,publicacao).subscribe();
  }

  delete(id:number){
    this.http.delete(this.url+'/'+id).subscribe();
  }

  update(publicacao:Publicacao){
    this.http.put(this.url,publicacao).subscribe(res=>{
        console.log(res);  
    });
  }


}
