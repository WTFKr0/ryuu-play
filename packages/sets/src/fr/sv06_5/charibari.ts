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

export class Charibari extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Charibari';

  public fullName: string = 'Charibari sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/041/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 100;

  public weakness = [{ type: CardType.FIRE }];

  public resistance = [
    {
      type: CardType.GRASS,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Charge',
      cost: [CardType.METAL,CardType.COLORLESS],
      damage: '30',
      text: '',
    },
    {
      name: 'Confrontation',
      cost: [CardType.METAL,CardType.METAL,CardType.COLORLESS],
      damage: '70',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
