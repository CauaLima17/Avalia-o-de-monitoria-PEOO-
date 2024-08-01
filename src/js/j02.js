class SistemaEscolar {
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
        console.log('Função cadastrar estudante')
    }

    listarEstudantes(){
        console.log('Função listar estudantes')
    }

    atualizarEstudante(){
        console.log('Função atualizar dados do estudante');
    }

    excluirEstudante(){
        console.log('Função excluir estudante')
    }

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
                this.excluirEstudante();
                break

            } else if (this.userChoice === 4){
                this.atualizarEstudante()
                break

            } else if (this.userChoice === 5) {
                console.log('Saindo. . .');
                break;
            };
        };
    };
};

// Instanciando a classe e chamando o método main.
const sistema = new SistemaEscolar();
sistema.main();
