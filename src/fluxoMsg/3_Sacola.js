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

      return `Digite a quantidade desejada do prato *${cardapioLoja[message].descricao}*:`; 
    } else {
      const itemQuantidade = parseInt(message);

      if (isNaN(itemQuantidade) || itemQuantidade < 0) {
        delete bdTemp[from].tempItem;
        return 'Quantidade inválida!';
      } 

      const itemSelecionado = cardapioLoja[bdTemp[from].tempItem.itemCodigo];

      if (!itemSelecionado || typeof itemSelecionado.preco !== 'number') {
        delete bdTemp[from].tempItem;
        return 'Código inválido, digite novamente!';
      }

      bdTemp[from].tempItem.itemQuantidade = itemQuantidade

      bdTemp[from].itemSacola = bdTemp[from].itemSacola || [];

      // const sacolaTotal = itemSelecionado.preco * itemQuantidade;
      bdTemp[from].itemSacola.push({...itemSelecionado, itemQuantidade, descricao: itemSelecionado.descricao});
      delete bdTemp[from].tempItem

      let sacolaMensagem = '🛒 *SACOLA DE COMPRAS* 🛒\n\n';
      let totalValor = 0;
      let totalQuantidade = 0;

      for (const itemEscolhidos of bdTemp[from].itemSacola) {
        const sacolaTotal = itemEscolhidos.preco * itemEscolhidos.itemQuantidade;
        totalValor += sacolaTotal;
        totalQuantidade += itemEscolhidos.itemQuantidade;
        sacolaMensagem += `*${itemEscolhidos.descricao}* - ${itemEscolhidos.itemQuantidade} unidades - Total: R$ ${sacolaTotal.toFixed(2)}\n`;
      }

      return (
        `✅ *${itemSelecionado.descricao}* (${itemQuantidade} unidades) adicionado ao pedido! \n\n` +
        sacolaMensagem +
        `\nTotal de itens: ${totalQuantidade} - Total a pagar: R$ ${totalValor.toFixed(2)}\n` +
        '\n-----------------------------------\n#️⃣ - ```FINALIZAR pedido``` \n*️⃣ - ```CANCELAR pedido``` \n'
      );
    }
  },
};