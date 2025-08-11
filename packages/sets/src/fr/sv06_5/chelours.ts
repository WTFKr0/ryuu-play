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

export class Chelours extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Chelours';

  public fullName: string = 'Chelours sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/053/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 130;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];

  public attacks = [
    {
      name: 'Charge Puissance',
      cost: [CardType.COLORLESS],
      damage: '30',
      text: 'Cherchez dans votre deck une carte Énergie de base, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.',
    },
    {
      name: 'Enfoncement',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '130',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
