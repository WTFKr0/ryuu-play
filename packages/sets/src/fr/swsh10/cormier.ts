import {
  Effect,
  GameError,
  GameMessage,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';

export class Cormier extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'swsh10';

  public name: string = 'Cormier';

  public fullName: string = 'Cormier swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/149/high.jpg';

  public text: string = 'Choisissez une carte dans votre main et défaussez les autres cartes. Dans ce cas, piochez 4 cartes. (Si vous n\'avez pas d\'autres cartes en main, vous ne pouvez pas utiliser cette carte.)';


  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {

    // Piochez 3 cartes.
    if (effect instanceof TrainerEffect && effect.trainerCard === this && effect.trainerCard.text === 'Piochez 3 cartes.') {
      const player = effect.player;

      if (player.deck.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }

      player.deck.moveTo(player.hand, 3);
    }

    return state;
  }
}
