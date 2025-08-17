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

export class Bayar extends TrainerCard {

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public set: string = 'swsh12';

  public name: string = 'Bayar';

  public fullName: string = 'Bayar swsh12';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12/151/high.jpg';

  public text: string = 'Vous ne pouvez utiliser cette carte que si c\'est votre dernière carte en main. Piochez une carte pour chacun des Pokémon de Banc (les vôtres et ceux de votre adversaire).';


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
