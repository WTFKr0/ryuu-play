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

export class Civière_Nocturne extends TrainerCard {

  public trainerType: TrainerType = TrainerType.ITEM;

  public set: string = 'sv06.5';

  public name: string = 'Civière Nocturne';

  public fullName: string = 'Civière Nocturne sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/061/high.jpg';

  public text: string = 'Ajoutez un Pokémon ou une carte Énergie de base de votre pile de défausse à votre main.';


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
