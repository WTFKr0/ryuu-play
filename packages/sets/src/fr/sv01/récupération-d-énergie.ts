import {
  Effect,
  //GameError,
  //GameMessage,
  State,
  StoreLike,
  TrainerCard,
  //TrainerEffect,
  TrainerType,
} from '@ptcg/common';

export class Récupération_d_Énergie extends TrainerCard {

  public trainerType: TrainerType = TrainerType.TOOL;

  public set: string = 'sv01';

  public name: string = 'Récupération d\'Énergie';

  public fullName: string = 'Récupération d\'Énergie sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/171/high.jpg';

  public text: string = 'Ajoutez jusqu\'à 2 cartes Énergie de base de votre pile de défausse à votre main.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
