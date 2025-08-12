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

export class Kangourex extends PokemonCard {

  public set: string = 'sv03';

  public name: string = 'Kangourex';

  public fullName: string = 'Kangourex sv03';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv03/165/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 130;

  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Coup d\'Boule',
      cost: [CardType.COLORLESS],
      damage: '30',
      text: '',
    },
    {
      name: 'Pique-Pioche',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '60',
      text: 'Piochez 2 cartes.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
