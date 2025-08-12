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

export class Académie_de_Nuit extends TrainerCard {

  public trainerType: TrainerType = TrainerType.STADIUM;

  public set: string = 'sv06.5';

  public name: string = 'Académie de Nuit';

  public fullName: string = 'Académie de Nuit sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/054/high.jpg';

  public text: string = 'Une fois pendant le tour de chaque joueur, ce joueur-là peut placer une carte de sa main sur le dessus de son deck.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
