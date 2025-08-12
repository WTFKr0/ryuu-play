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

export class Menzi extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv01';

  public name: string = 'Menzi';

  public fullName: string = 'Menzi sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/180/high.jpg';

  public text: string = 'Piochez 3 cartes.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
