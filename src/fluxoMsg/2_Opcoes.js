import { bdTemp } from '../bancoTemp.js';
import { cardapioLoja } from '../cardapioLoja.js';

export const Opcoes = {
  exec({ from, message, client }) {
    
    if (message === '1') {
      const menuKeys = Object.keys(cardapioLoja);
      let mensagemCardapio = '🚨  CARDÁPIO  🚨\n\n';
      let mensagemRodape = 'Para visualizar os pratos, *acesse*: https://wa.me/c/5584998026012\n\n⚠️ ```APENAS UMA OPÇÃO POR VEZ``` ⚠️\n*Digite OPÇÃO referente ao produto ao qual deseja pedir:*';

      menuKeys.forEach((value, index) => {
        const itemSelecionado = cardapioLoja[value];
        const cardapioID = (index + 1);

        mensagemCardapio += `*${cardapioID}* - _${itemSelecionado.descricao}_ - *${itemSelecionado.preco}* \n`;
      });
      
      mensagemCardapio += mensagemRodape

      bdTemp[from].fluxo = 3
      return mensagemCardapio
    } else if (message === '2') {
      return 'Nosso delivery é apenas pelo ifood.'
    } else if (message === '3') {
      return 'Rua Raquel Gomes de Castro, 54B - Rosa dos Ventos'
    } else if (message === '4') {
      bdTemp[from].fluxo = 10
      return 'Falar com atendente'
    } else {
      return 'Digite uma opção válida!'
    }
  }
}