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
  PowerType,
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

export class Téraclope extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Téraclope';

  public fullName: string = 'Téraclope sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/019/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 90;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [CardType.COLORLESS,CardType.COLORLESS];

  public powers = [
    {
      name: 'Explosion Maudite',
      powerType: PowerType.POKEPOWER,
      text: 'Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur l\'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.',
    },
  ];

  public attacks = [
    {
      name: 'Feu Follet',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC],
      damage: '50',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
