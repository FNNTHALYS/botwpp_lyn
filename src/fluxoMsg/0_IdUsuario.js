import { bdTemp } from '../bancoTemp.js';

export const idUsuario = {
  exec({ from }) {
    bdTemp[from].fluxo = 1

      const nomeEmpresa = 'NORDESTYN';
      const nomeBOT = 'Atendente LYN';

      if (!bdTemp[from].nome) {
        bdTemp[from].name = '';
      }

      return (
        `🤖 Olá! Tudo bem? Sou o ${nomeBOT}, o seu *assistente virtual* do ${nomeEmpresa}.\n\n` +
        `Estou aqui para tornar o seu atendimento mais ágil! 🙋‍♂️\n\n` +
        // 'Antes de começarmos, por favor, me diga o seu *nome*:'
      );
  },
};