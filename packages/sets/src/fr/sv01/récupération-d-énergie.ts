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

export class Récupération_d_Énergie extends TrainerCard {

  public trainerType: TrainerType = TrainerType.ITEM;

  public set: string = 'sv01';

  public name: string = 'Récupération d\'Énergie';

  public fullName: string = 'Récupération d\'Énergie sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/171/high.jpg';

  public text: string = 'Ajoutez jusqu\'à 2 cartes Énergie de base de votre pile de défausse à votre main.';


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
