import { bdTemp } from '../bancoTemp.js';

export const BoasVindas = {
  exec({ from, message }) {

    function formatClientName(name) {
      // Dividir o nome em palavras usando espaços como delimitador
      let words = name.split(" ");
      
      // Iterar por cada palavra e capitalizar a primeira letra, mantendo o restante em minúscula
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        
        // Garantir que a palavra não esteja vazia antes de capitalizar
        if (word.length > 0) {
          // Transformar a primeira letra da palavra em maiúscula e o resto em minúscula
          words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }
      
      // Juntar as palavras de volta em uma única string
      let nomeFormatado = words.join(" ");
      
      return nomeFormatado;
    }

    const nomeCliente = message.trim();
    const nomeFormatado = formatClientName(nomeCliente);

    if (!nomeFormatado || nomeFormatado === '') {
      return 'Por favor, informe seu *nome* para continuarmos.';
    }

    bdTemp[from].nome = nomeFormatado;

    bdTemp[from].fluxo = 2;

    return (
      `Olá, ${nomeFormatado}! Como posso te ajudar hoje?\n\n` +
      'Escolha uma das opções abaixo:\n' +
      '-----------------------------------\n' +
      '1️⃣ - ```REALIZAR ORÇAMENTO```\n' +
      '2️⃣ - ```DELIVERY```\n' +
      '3️⃣ - ```LOCALIZAÇÃO```\n' +
      '0️⃣ - ```FALAR COM ATENDENTE```'
    );
  },
};