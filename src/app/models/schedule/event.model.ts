import { ThemeModel } from './theme.model';

export class EventModel {
  Dia: number;
  NomeProduto?: string;
  NameProduct?: string;
  Day: number;
  idEvent: number;
  IdTurma: number;
  Mes: number;
  Month: number;
  NomeTurma: string;
  Curso?: string;
  Course?: string;
  tema?: ThemeModel[];
  isR3?: boolean;
  isR4?: boolean;
  isColection?: boolean;
  simulado?: {
    dia: number;
    isLastDay: boolean;
    isOnline: boolean;
    idSimulado: number;
  };
  IdProduto: number;
  TituloRessalva?: string;
  MensagemRessalva?: string;
}
