class SistemaEscolar {
    constructor(){
        this.estudantesCadastrados = []
    }

    mostrarMenu() {
        const menu = `
        ====================
           SISTEMA ESCOLAR
        ====================
        1. Cadastrar novo estudante
        2. Listar todos os estudantes
        3. Atualizar dados de um estudante
        4. Excluir um estudante
        5. Sair
        ====================
        `;
        console.log(menu);
    }

    opcaoInvalida() {
        console.log("Opção inválida, por favor selecione uma opção válida.");
    }

    cadastrarEstudante(){
        this.nomeEstudante = prompt('Informe o nome do estudante: ');
        this.matriculaEstudante = prompt('Informe a matricula do estudante: ');
        this.dia = prompt('Informe o dia de nascimento do estudante: ');
        this.mes = prompt('Informe o mes de nascimento do estudante: ');
        this.ano = prompt('Informe o ano de nascimento do estudante: ');

        this.dataNasc = new Data(this.dia, this.mes, this.ano);

        this.novoEstudante = new Estudante(this.nomeEstudante, this.matriculaEstudante, this.dataNasc);

        this.estudantesCadastrados.push(this.novoEstudante);

        console.log('Estudante cadastrado com sucesso.')

        this.continuarNoSistema = confirm('Deseja continuar no sitema?')
        if (this.continuarNoSistema){
            this.main();
        } else {
            console.log('Saindo . . .')
        };
    };

    listarEstudantes(){
        this.estudantesCadastrados.forEach((estudante) => console.log(estudante));

        this.continuarNoSistema = confirm('Deseja continuar no sitema?')
        if (this.continuarNoSistema){
            this.main();
        } else {
            console.log('Saindo . . .')
        };
    };

    atualizarEstudante(){
        this.atualizarEsteEstudante = prompt('Qual o nome do estudante? ');

        this.estudantesCadastrados.forEach((estudante) => {
            if (estudante.nome.toLowerCase() === this.atualizarEsteEstudante.toLowerCase()){

                estudante.nome = prompt('Informe o novo nome: ')
                estudante.matricula = prompt('Informe a nova matrícula: ');
                estudante.dataNascimento = prompt('Informe o nova data de nascimento: ');

                console.log('Estudante atualizado com sucesso.')

            } else {
                console.log('Estudante não encontrado.');
            };

            this.continuarNoSistema = confirm('Deseja continuar no sitema?')

            if (this.continuarNoSistema){
                this.main();
            } else {
                console.log('Saindo . . .')
            };
        });
    };

    excluirEstudante(){
        this.excluirEsteEstudante = prompt('Qual o nome do estudante? ');

        this.estudantesCadastrados.forEach((estudante) => {
            if (estudante.nome.toLowerCase() === this.excluirEsteEstudante.toLowerCase()){

                this.estudantesCadastrados.splice(estudante)
                console.log('Estudante removido com sucesso.')

            } else {
                console.log('Estudante não encontrado.');
            };
            this.continuarNoSistema = confirm('Deseja continuar no sitema?')

            if (this.continuarNoSistema){
                this.main();
            } else {
                console.log('Saindo . . .')
            };
        });
    };

    main() {
        while (true) {
            this.mostrarMenu()

            this.userChoice = parseInt(prompt('Informe o procedimento "5" para sair.'));

            if (this.userChoice === 1){
                this.cadastrarEstudante();
                break

            } else if (this.userChoice === 2){
                this.listarEstudantes();
                break

            } else if (this.userChoice === 3){
                this.atualizarEstudante();
                break

            } else if (this.userChoice === 4){
                this.excluirEstudante();
                break

            } else if (this.userChoice === 5) {
                console.log('Saindo. . .');
                break;
            } else {
                this.opcaoInvalida()
                break
            };
        };
    };
};

class Data {
    constructor(dia, mes, ano) {
        if (this.validarData(dia, mes, ano)){
            throw new Error("A data de nascimento informada é inválida.");
        };

        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    };

    validarData(dia, mes, ano){
        if (dia > 31 || dia < 1){
            return true

        } else if (mes > 12 || mes < 1){
            return true

        } else if (ano > 2024){
            return true
        };
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

const sistema = new SistemaEscolar();
sistema.main();
