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

export class Sablier_du_Pouvoir extends TrainerCard {

  public trainerType: TrainerType = TrainerType.TOOL;

  public set: string = 'sv06.5';

  public name: string = 'Sablier du Pouvoir';

  public fullName: string = 'Sablier du Pouvoir sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/063/high.jpg';

  public text: string = 'À la fin de votre tour (après votre attaque), si le Pokémon auquel cette carte est attachée est sur le Poste Actif, vous pouvez lui attacher une carte Énergie de base de votre pile de défausse.';


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
