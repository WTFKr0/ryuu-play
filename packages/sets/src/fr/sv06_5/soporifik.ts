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

export class Soporifik extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Soporifik';

  public fullName: string = 'Soporifik sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/016/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 70;

  public weakness = [{ type: CardType.DARK }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Regard Étrange',
      cost: [CardType.PSYCHIC],
      damage: '10',
      text: 'Votre adversaire montre sa main.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
