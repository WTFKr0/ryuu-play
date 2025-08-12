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

export class Duralugon extends PokemonCard {

  public set: string = 'sv08';

  public name: string = 'Duralugon';

  public fullName: string = 'Duralugon sv08';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv08/129/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

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
      name: 'Confrontation',
      cost: [CardType.METAL,CardType.METAL],
      damage: '50',
      text: '',
    },
    {
      name: 'Duralurayon',
      cost: [CardType.METAL,CardType.METAL,CardType.METAL],
      damage: '130',
      text: 'Défaussez 2 Énergies de ce Pokémon.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
