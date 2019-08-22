export interface Photo{
    id:number;
    postDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number; //ao selecionar essa propriedade user e clicar com botão direito e escolher a opção rename symbol, vc vai poder fazer um refactor dessa propriede que vai mudar automaticamente em todos os componentes que usarem essa propriedade.
}