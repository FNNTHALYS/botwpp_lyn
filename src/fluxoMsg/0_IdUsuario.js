import { bdTemp } from '../bancoTemp.js';

export const idUsuario = {
  exec({ from }) {
    bdTemp[from].fluxo = 1

      const nomeEmpresa = 'NORDESTYN';
      const nomeBOT = 'Nordestino LYN';

      if (!bdTemp[from].nome) {
        bdTemp[from].name = '';
      }

      const mensagemDeBoasVindas = [
        `🤖 E aí, doutor! Tudo em cima? Eu sou o *${nomeBOT}*, o assistente virtual da *${nomeEmpresa}*.\n\n Tô aqui pra desenrolar o teu pedido! 🙋‍♂️\n\n Antes de irmos, diz teu *nome*?`,
      
        `🤖 Oi, como é que cê tá? Sou o *${nomeBOT}*, o assistente virtual da *${nomeEmpresa}*.\n\n Tô aqui pra dar um gás no teu atendimento! 🙋‍♂️\n\n Antes de começar, manda teu *nome* aí, doutor?`,
      
        `🤖 E aí, meu consagrado! Tudo em riba? Eu sou o *${nomeBOT}*, o assistente virtual da *${nomeEmpresa}*.\n\n Tô aqui pra ajudar no teu aperreo! 🙋‍♂️\n\n Antes de começarmos, qual é o teu *nome*?`,
      
        `🤖 E aí, beleza? Eu sou o *${nomeBOT}*, teu assistente virtual na *${nomeEmpresa}*.\n\n Tô aqui pra agilizar o teu atendimento, de rocha? 🙋‍♂️\n\n Antes de partir pro pedido, diz teu *nome*:`,
      
        `🤖 E aí, tudo na paz? Eu sou o *${nomeBOT}*, o assistente virtual da *${nomeEmpresa}*.\n\n Tô aqui pra desenrolar o teu atendimento! 🙋‍♂️\n\n Antes de começar, manda o teu *nome* aí, major?`,
      
        `🤖 E aí, meu amigo! Tudo sossegado? Eu sou o *${nomeBOT}*, o teu *compadre virtual* da *${nomeEmpresa}*.\n\n Tô aqui pra fazer a tua vida mais prática! 🙋‍♂️\n\n Antes de começarmos, diz teu *nome* pra nóis?`
      ];

      const indiceAleatorio = Math.floor(Math.random() * mensagemDeBoasVindas.length);

      return mensagemDeBoasVindas[indiceAleatorio];
  },
};
