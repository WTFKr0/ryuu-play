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

export class Faiblo_Ball extends TrainerCard {

  public trainerType: TrainerType = TrainerType.TOOL;

  public set: string = 'sv01';

  public name: string = 'Faiblo Ball';

  public fullName: string = 'Faiblo Ball sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/181/high.jpg';

  public text: string = 'Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
