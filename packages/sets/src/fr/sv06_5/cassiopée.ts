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

export class Cassiopée extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv06.5';

  public name: string = 'Cassiopée';

  public fullName: string = 'Cassiopée sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/056/high.jpg';

  public text: string = 'Vous ne pouvez utiliser cette carte que si c\'est votre dernière carte en main. Cherchez dans votre deck jusqu\'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
