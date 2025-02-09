let vagas = [];

function listarVagas() {
    let lista = document.getElementById("lista-vagas");
    lista.innerHTML = "";

    if (vagas.length === 0) {
        lista.innerHTML = "<p>Nenhuma vaga cadastrada.</p>";
        return;
    }

    vagas.forEach((vaga, index) => {
        let vagaElement = document.createElement("div");
        vagaElement.classList.add("vaga");
        vagaElement.innerHTML = `
            <strong>Vaga #${index + 1}</strong><br>
            <b>Nome:</b> ${vaga.nome} <br>
            <b>Descrição:</b> ${vaga.descricao} <br>
            <b>Data Limite:</b> ${vaga.data} <br>
            <b>Inscritos:</b> ${vaga.inscritos} <br>
            <b>Candidatos:</b> ${vaga.candidatos.length > 0 ? vaga.candidatos.join(", ") : "Nenhum"} <br>
        `;
        lista.appendChild(vagaElement);
    });
}

function criarVaga() {
    let nome = prompt("Digite o nome da vaga:");
    let descricao = prompt("Digite a descrição da vaga:");
    let data = prompt("Digite a data limite da vaga:");

    if (nome && descricao && data) {
        let novaVaga = {
            nome: nome,
            descricao: descricao,
            data: data,
            candidatos: [],
            inscritos: 0
        };
        vagas.push(novaVaga);
        alert("Vaga criada com sucesso!");
        listarVagas();
    } else {
        alert("Preencha todos os campos!");
    }
}

function visualizarVaga() {
    let indice = parseInt(prompt("Digite o índice da vaga que deseja visualizar:")) - 1;

    if (indice >= 0 && indice < vagas.length) {
        let vaga = vagas[indice];
        alert(
            `Vaga #${indice + 1}\n` +
            `Nome: ${vaga.nome}\n` +
            `Descrição: ${vaga.descricao}\n` +
            `Data Limite: ${vaga.data}\n` +
            `Inscritos: ${vaga.inscritos}\n` +
            `Candidatos: ${vaga.candidatos.length > 0 ? vaga.candidatos.join(", ") : "Nenhum"}`
        );
    } else {
        alert("Índice inválido!");
    }
}

function inscreverCandidato() {
    let nome = prompt("Digite seu nome:");
    let indice = parseInt(prompt("Digite o índice da vaga desejada:")) - 1;

    if (indice >= 0 && indice < vagas.length) {
        let vaga = vagas[indice];
        let confirmar = confirm(
            `Deseja se inscrever na vaga:\n` +
            `Nome: ${vaga.nome}\n` +
            `Descrição: ${vaga.descricao}\n` +
            `Data Limite: ${vaga.data}`
        );

        if (confirmar) {
            vaga.candidatos.push(nome);
            vaga.inscritos += 1;
            alert("Inscrição realizada com sucesso!");
            listarVagas();
        }
    } else {
        alert("Índice inválido!");
    }
}

function excluirVaga() {
    let indice = parseInt(prompt("Digite o índice da vaga a ser excluída:")) - 1;

    if (indice >= 0 && indice < vagas.length) {
        let confirmar = confirm(`Tem certeza que deseja excluir a vaga: ${vagas[indice].nome}?`);
        if (confirmar) {
            vagas.splice(indice, 1);
            alert("Vaga excluída com sucesso!");
            listarVagas();
        }
    } else {
        alert("Índice inválido!");
    }
}
