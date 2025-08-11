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

export class Couafarel extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Couafarel';

  public fullName: string = 'Couafarel sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/051/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 100;
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
      name: 'Assistance Énergétique',
      cost: [CardType.COLORLESS],
      damage: '30',
      text: 'Attachez une carte Énergie de base de votre pile de défausse à l\'un de vos Pokémon de Banc.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
