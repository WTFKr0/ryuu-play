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

export class Pierrick extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv04';

  public name: string = 'Pierrick';

  public fullName: string = 'Pierrick sv04';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv04/173/high.jpg';

  public text: string = 'Piochez 2 cartes. Ajoutez une carte Énergie de base de votre pile de défausse à votre main.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
