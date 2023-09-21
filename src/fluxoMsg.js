import {
  idUsuario,
  BoasVindas,
  Opcoes,
  Sacola,
  Sacola2
} from './fluxoMsg/index.js';

import { bdTemp } from './bancoTemp.js';

export const fluxo = [
  {
    descricao: 'Identificacao',
    fluxo: idUsuario,
  },
  {
    descricao: 'Boas-Vindas',
    fluxo: BoasVindas,
  },
  {
    descricao: 'Opcoes',
    fluxo: Opcoes,
  },
  {
    descricao: 'Sacola',
    fluxo: Sacola,
  },
  {
    descricao: 'Sacola2',
    fluxo: Sacola2,
  },
];

export function getFluxo({ from }) {
  if (bdTemp[from]) {
    return bdTemp[from].fluxo;
  }
  bdTemp[from] = {
    fluxo: 0,
    nome: '',
    itens: [],
  };

  return bdTemp[from].fluxo;
}