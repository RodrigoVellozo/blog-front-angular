export class Usuario{
    
    id:number;
	nome:string;
	sobrenome:string;
	email:string;
	senha:string;
	imagem:string;

    constructor()
    constructor(id?:number, nome?:string, sobrenome?:string, email?:string, senha?:string, imagem?:string){
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.email=email;
        this.senha=senha;
        this.imagem=imagem;
    }
}