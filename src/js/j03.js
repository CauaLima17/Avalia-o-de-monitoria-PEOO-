class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    };
};

class Estudante {
    constructor(nome, matricula, dataNascimento) {
        if (!this.validarNome(nome)) {
            throw new Error("O nome deve incluir pelo menos o nome e sobrenome.");
        };

        this.nome = nome;
        this.matricula = matricula;
        this.dataNascimento = dataNascimento;
    };

    validarNome(nome) {
        return nome.trim().split(' ').length >= 2;
    };
};



const novoEstudante = new Estudante;
novoEstudante(nomeEstudante, matriculaEstudante, dataNasc);
