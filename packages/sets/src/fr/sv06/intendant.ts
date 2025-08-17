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

export class Intendant extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv06';

  public name: string = 'Intendant';

  public fullName: string = 'Intendant sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/144/high.jpg';

  public text: string = 'Piochez 2 cartes. Si vous piochez au moins une carte de cette façon et que Centre Culturel est en jeu, mélangez cet Intendant avec votre deck au lieu de le défausser.';


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
