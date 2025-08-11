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

export class Mewtwo extends PokemonCard {

  public set: string = 'swsh9';

  public name: string = 'Mewtwo';

  public fullName: string = 'Mewtwo swsh9';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh9/056/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

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
      name: 'Aspire-Vie',
      cost: [CardType.PSYCHIC],
      damage: '20',
      text: 'Soignez 20 dégâts de ce Pokémon.',
    },
    {
      name: 'Brûlure Psy',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC,CardType.COLORLESS],
      damage: '110',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
