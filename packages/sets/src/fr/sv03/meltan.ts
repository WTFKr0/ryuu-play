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

export class Meltan extends PokemonCard {

  public set: string = 'sv03';

  public name: string = 'Meltan';

  public fullName: string = 'Meltan sv03';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv03/152/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 70;

  public weakness = [{ type: CardType.FIRE }];

  public resistance = [
    {
      type: CardType.GRASS,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Dissolution',
      cost: [CardType.METAL],
      damage: '20',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
