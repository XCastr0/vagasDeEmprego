let opcao = parseInt(prompt(
    "Escolha uma opção:\n" +
    "1 - Listar vagas disponíveis\n" +
    "2 - Criar uma nova vaga\n" +
    "3 - Visualizar uma vaga\n" +
    "4 - Inscrever um candidato em uma vaga\n" +
    "5 - Excluir uma vaga\n" +
    "6 - Sair\n"
));

let vagas = []; // Armazena todas as vagas

while (opcao !== 6) {
    switch (opcao) {
        case 1:
            // Exibir todas as vagas disponíveis
            if (vagas.length === 0) {
                alert("Nenhuma vaga cadastrada.");
            } else {
                let exibirVaga = vagas.map((vaga, index) =>
                    "Vaga #" + (index + 1) + "\n" +
                    "Nome: " + vaga.nome + "\n" +
                    "Descrição: " + vaga.descricao + "\n" +
                    "Data limite: " + vaga.data + "\n" +
                    "Inscritos: " + vaga.inscritos
                ).join("\n\n");

                alert(exibirVaga);
            }
            break;

        case 2:
            // Criar uma nova vaga
            let nomeVaga = prompt("Digite o nome para a vaga:");
            let descricaoVaga = prompt("Digite a descrição para a vaga:");
            let dataLimite = prompt("Digite a data final para a vaga:");

            let confirmarInf = prompt("Tem certeza dessas informações? Digite 'sim' para confirmar.\n" +
                "Nome da vaga: " + nomeVaga + "\n" +
                "Descrição: " + descricaoVaga + "\n" +
                "Data limite: " + dataLimite);

            if (confirmarInf.toLowerCase() === "sim") {
                let novaVaga = {
                    nome: nomeVaga,
                    descricao: descricaoVaga,
                    data: dataLimite,
                    candidatos: [], // Inicializa um array vazio para candidatos
                    inscritos: 0    // Inicializa o contador de inscritos
                };

                vagas.push(novaVaga);
                alert("Vaga criada com sucesso!");
            } else {
                alert("Operação cancelada.");
            }
            break;

        case 3:
            // Visualizar uma vaga específica
            let indiceVisualizar = parseInt(prompt("Digite o índice da vaga que deseja visualizar:")) - 1;

            if (indiceVisualizar >= 0 && indiceVisualizar < vagas.length) {
                let vaga = vagas[indiceVisualizar];
                alert("Vaga #" + (indiceVisualizar + 1) + "\n" +
                    "Nome: " + vaga.nome + "\n" +
                    "Descrição: " + vaga.descricao + "\n" +
                    "Data limite: " + vaga.data + "\n" +
                    "Inscritos: " + vaga.inscritos + "\n" +
                    "Candidatos: " + (vaga.candidatos.length > 0 ? vaga.candidatos.join(", ") : "Nenhum candidato ainda.")
                );
            } else {
                alert("Índice inválido.");
            }
            break;

        case 4:
            // Inscrever-se em uma vaga
            let nomeCandidato = prompt("Digite o seu nome:");
            let indiceVaga = parseInt(prompt("Digite o índice da vaga que deseja se inscrever:")) - 1;

            if (indiceVaga >= 0 && indiceVaga < vagas.length) {
                let vagaEscolhida = vagas[indiceVaga];

                let confirmarInscricao = confirm("Você escolheu a vaga: \n" +
                    "Nome: " + vagaEscolhida.nome + "\n" +
                    "Descrição: " + vagaEscolhida.descricao + "\n" +
                    "Data limite: " + vagaEscolhida.data + "\n\n" +
                    "Confirma sua inscrição para esta vaga?");
                
                if (confirmarInscricao) {
                    vagaEscolhida.candidatos.push(nomeCandidato);
                    vagaEscolhida.inscritos += 1;

                    alert("Inscrição realizada com sucesso! Número de inscritos na vaga " + vagaEscolhida.nome + ": " + vagaEscolhida.inscritos);
                } else {
                    alert("Inscrição cancelada.");
                }
            } else {
                alert("Índice inválido. Não há vaga com esse número.");
            }
            break;

        case 5:
            // Excluir uma vaga
            let indiceExcluir = parseInt(prompt("Digite o índice da vaga que deseja excluir:")) - 1;

            if (indiceExcluir >= 0 && indiceExcluir < vagas.length) {
                let confirmarExclusao = confirm("Tem certeza que deseja excluir a vaga '" + vagas[indiceExcluir].nome + "'?");
                
                if (confirmarExclusao) {
                    vagas.splice(indiceExcluir, 1);
                    alert("Vaga excluída com sucesso!");
                }
            } else {
                alert("Índice inválido.");
            }
            break;

        default:
            alert("Opção inválida.");
    }

    // Captura novamente a opção após a execução de cada comando
    opcao = parseInt(prompt(
        "Escolha uma opção:\n" +
        "1 - Listar vagas disponíveis\n" +
        "2 - Criar uma nova vaga\n" +
        "3 - Visualizar uma vaga\n" +
        "4 - Inscrever um candidato em uma vaga\n" +
        "5 - Excluir uma vaga\n" +
        "6 - Sair\n"
    ));
}

console.log("Saindo do sistema...");
