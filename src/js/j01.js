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

    main() {
        while (true) {
            this.mostrarMenu()

            this.userChoice = parseInt(prompt('Informe o procedimento "5" para sair.'));

            if (this.userChoice === 5){
                console.log('Saindo. . .')
                break
            };
        };
    };
};

// Instanciando a classe e chamando o método main.
const sistema = new SistemaEscolar();
sistema.main();
