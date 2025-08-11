import {
  //AttackEffect,
  CardType,
  //CheckHpEffect,
  //ChooseCardsPrompt,
  //DealDamageEffect,
  Effect,
  //GameLog,
  //GameMessage,
  PokemonCard,
  //PowerType,
  Stage,
  State,
  //StateUtils,
  StoreLike,
  //SuperType,
  //TrainerCard,
  //TrainerEffect,
  //TrainerType,
  //WhoBeginsEffect,
} from '@ptcg/common';

export class Trépassable extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Trépassable';

  public fullName: string = 'Trépassable sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/096/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 150;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];

  public attacks = [
    {
      name: 'Tir Effrayant',
      cost: [CardType.PSYCHIC,CardType.COLORLESS],
      damage: '40',
      text: '',
    },
    {
      name: 'Puissance Tellurique',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '80+',
      text: 'Si vous avez un Stade en jeu, cette attaque inflige 80 dégâts supplémentaires.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
