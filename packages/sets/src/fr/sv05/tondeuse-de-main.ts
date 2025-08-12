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

export class Tondeuse_de_Main extends TrainerCard {

  public trainerType: TrainerType = TrainerType.ITEM;

  public set: string = 'sv05';

  public name: string = 'Tondeuse de Main';

  public fullName: string = 'Tondeuse de Main sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/150/high.jpg';

  public text: string = 'Chaque joueur défausse des cartes de sa main jusqu\'à en avoir 5 en main. Votre adversaire défausse en premier. (Si un joueur a 5 cartes ou moins dans sa main, il ne défausse pas.)';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
