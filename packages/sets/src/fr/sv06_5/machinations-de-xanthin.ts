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

export class Machinations_de_Xanthin extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv06.5';

  public name: string = 'Machinations de Xanthin';

  public fullName: string = 'Machinations de Xanthin sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/064/high.jpg';

  public text: string = 'Votre adversaire défausse des cartes de sa main jusqu\'à en avoir 3 en main.';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
