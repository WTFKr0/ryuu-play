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

export class Grenousse extends PokemonCard {

  public set: string = 'sv06';

  public name: string = 'Grenousse';

  public fullName: string = 'Grenousse sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/056/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 60;

  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Nuée',
      cost: [CardType.WATER],
      damage: '',
      text: 'Cherchez dans votre deck jusqu\'à 2 Grenousse, puis placez-les sur votre Banc. Mélangez ensuite votre deck.',
    },
    {
      name: 'Flop',
      cost: [CardType.WATER],
      damage: '10',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
