function obterDataFormatada(data) {
    const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const diaDaSemana = diasDaSemana[data.getDay()];
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const nomeDoMes = meses[data.getMonth()];
    const diaDoMes = data.getDate();
    const ano = data.getFullYear();
    return `${diaDaSemana}, ${diaDoMes} de ${nomeDoMes} de ${ano}`;
}

// Criando uma data com os componentes específicos
const dataAtual = new Date(); // O mês é zero-indexado (0 = janeiro, 11 = dezembro)

// Exibindo a data na div
const divData = document.querySelector(".data");
divData.textContent = obterDataFormatada(dataAtual);