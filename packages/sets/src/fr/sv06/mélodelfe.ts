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

export class Mélodelfe extends PokemonCard {

  public set: string = 'sv06';

  public name: string = 'Mélodelfe';

  public fullName: string = 'Mélodelfe sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/079/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 120;
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
      name: 'Métronome',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '',
      text: 'Choisissez l\'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.',
    },
    {
      name: 'Coup Magique',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '100',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
