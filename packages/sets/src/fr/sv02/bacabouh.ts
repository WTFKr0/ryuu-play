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

export class Bacabouh extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Bacabouh';

  public fullName: string = 'Bacabouh sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/095/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 90;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];

  public attacks = [
    {
      name: 'Murmure',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '20',
      text: '',
    },
    {
      name: 'Tir de Boue',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '40',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
