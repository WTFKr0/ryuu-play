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

export class Scalpion extends PokemonCard {

  public set: string = 'swsh12.5';

  public name: string = 'Scalpion';

  public fullName: string = 'Scalpion swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/092/high.jpg';

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
      name: 'Transpercement',
      cost: [CardType.METAL],
      damage: '20',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
