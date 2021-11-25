class Cliente {
    //Propriedades por default: public
    codigo: number;
    nome: string;
    endereco: string;
    cidade: string;
    estado: string;
    telefone: string;
    email: string;
    idade: number;

    constructor(codigo: number, nome: string, endereco: string, cidade: string, estado: string, telefone: string, email: string, idade: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.cidade = cidade;
        this.endereco = endereco;
        this.estado = estado;
        this.telefone = telefone;
        this.email = email; 
        this.idade = idade;
    }

    //Método:
    dadosCliente(){
        console.log("====== Dados do Cliente ======");
        console.log("Id do Cliente.......................: " + this.codigo); 
        console.log("Nome do Cliente.....................: " + this.nome);
        console.log("Endereço............................: " + this.endereco);
        console.log("Cidade..............................: " + this.cidade);
        console.log("Estado..............................: " + this.estado);
        console.log("Telefone............................: " + this.telefone);
        console.log("Idade...............................: " + this.idade);
        console.log("E-mail..............................: " + this.email);
        //console.log(`Email...............................: ${this.email}`);
    }
}


// Chamada do método
let cliente = new Cliente(1, "Glaucia Lemos", "Rua: Nossa Senhora de Copacabana", "99999", "Rio de Janeiro", "RJ", "(21) 99999-9999", "teste@gmail.com", 31);
let cliente1 = new Cliente(2, "Robinson Junior", "Rua: Oswald", "18", "São Paulo", "SP", "(11) 99999-9999", "testejuninho@gmail.com", 39);
cliente.dadosCliente();
cliente1.dadosCliente();