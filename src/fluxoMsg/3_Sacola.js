import { bdTemp } from '../bancoTemp.js';
import { cardapioLoja } from '../cardapioLoja.js';

export const Sacola = {
  exec({ from, message }) {
    
    if (message === '*') {
      return 'Pedido cancelado!'
    } else if (message === '#') {
      return 'Deseja finalizar pedido?'
    } else if (!cardapioLoja[message]) {
      return 'Opção inválida!'
    }

    if (!bdTemp[from].tempItem) {
      bdTemp[from].tempItem = {
        itemCodigo: message,
        itemQuantidade: null,
      };

      bdTemp[from].fluxo = 4

      return `Digite a quantidade desejada do prato *${cardapioLoja[message].descricao}*:`;
    } else {

      const itemSelecionado = cardapioLoja[bdTemp[from].tempItem.itemCodigo];

      if (!itemSelecionado || typeof itemSelecionado.preco !== 'number') {
        delete bdTemp[from].tempItem;
        return 'Código inválido, digite novamente!';
      }
    }
  },
};