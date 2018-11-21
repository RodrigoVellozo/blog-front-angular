
export class Publicacao{

    id:number;
	titulo:string;
	texto:string;
	data:Date;
	imagem:string;
    
    constructor()
    constructor(id?:number, titulo?:string, texto?:string, data?:Date, imagem?:string){
        this.id=id;
        this.titulo=titulo;
        this.texto=texto;
        this.data=data;
        this.imagem=imagem;
    }
}