import { create } from 'venom-bot';
import { fluxo, getFluxo } from './fluxoMsg.js';

create({
  session: 'Restaurante',
  multidevice: true,
  headless: false,
})
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function start(client) {
  client.onMessage(async (mensagem) => {
    console.log('Mensagem recebida:', mensagem.body);
    console.log('Usuário:', mensagem.from);

    if (!mensagem.isGroupMsg) {
      const currentFluxo = getFluxo({ from: mensagem.from });
      console.log('Fluxo:', currentFluxo);

        const mensagemResposta = fluxo[currentFluxo].fluxo.exec({
          from: mensagem.from,
          message: mensagem.body,
          client,
        });
      
        console.log('mensagemResposta:', mensagemResposta);
        
      if (mensagemResposta) {
        client.sendText(mensagem.from, mensagemResposta).then(() => {
          console.log('Mensagem enviada');
        }).catch(error => console.error('Erro ao enviar mensagem', error));
      }
    }
  });
}
