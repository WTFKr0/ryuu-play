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

export class Nabil extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'swsh1';

  public name: string = 'Nabil';

  public fullName: string = 'Nabil swsh1';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh1/165/high.jpg';

  public text: string = 'Piochez 3 cartes.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
