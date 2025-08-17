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

export class Pierrick extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'sv04';

  public name: string = 'Pierrick';

  public fullName: string = 'Pierrick sv04';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv04/173/high.jpg';

  public text: string = 'Piochez 2 cartes. Ajoutez une carte Énergie de base de votre pile de défausse à votre main.';


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
