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

export class Bargantua_de_Hisui extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Bargantua de Hisui';

  public fullName: string = 'Bargantua de Hisui swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/043/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 50;

  public weakness = [{ type: CardType.LIGHTNING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Réunion des Troupes',
      cost: [],
      damage: '',
      text: 'Cherchez dans votre deck jusqu\'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.',
    },
    {
      name: 'Charge',
      cost: [CardType.WATER],
      damage: '10',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
