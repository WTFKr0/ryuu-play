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

export class Mora extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv06';

  public name: string = 'Mora';

  public fullName: string = 'Mora sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/161/high.jpg';

  public text: string = 'Regardez les 5 cartes du dessus de votre deck et défaussez-en le nombre voulu. Replacez les autres cartes dans l\'ordre de votre choix.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
