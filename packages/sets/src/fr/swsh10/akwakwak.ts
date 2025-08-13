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

export class Akwakwak extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Akwakwak';

  public fullName: string = 'Akwakwak swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/029/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Psykokwak';

  public cardTypes: CardType[] = [CardType.WATER];

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
      name: 'Aqua-Dague',
      cost: [CardType.WATER,CardType.COLORLESS],
      damage: '50',
      text: '',
    },
    {
      name: 'Plongeon Joint',
      cost: [CardType.WATER,CardType.WATER,CardType.COLORLESS],
      damage: '',
      text: 'Défaussez le Pokémon Actif de chaque joueur et toutes les cartes attachées. (Vous choisissez un nouveau Pokémon Actif en premier.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
