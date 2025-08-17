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

export class Noctunoir extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Noctunoir';

  public fullName: string = 'Noctunoir sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/020/high.jpg';

  public stage: Stage = Stage.STAGE_2;
  public evolvesFrom = 'Téraclope';

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 160;

  public weakness = [{ type: CardType.DARK }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Explosion Maudite',
      powerType: PowerType.POKEPOWER,
      text: 'Une fois pendant votre tour, vous pouvez placer 13 marqueurs de dégâts sur l\'un des Pokémon de votre adversaire. Si vous utilisez ce talent, ce Pokémon est mis K.O.',
    },
  ];

  public attacks = [
    {
      name: 'Étreinte d\'Ombre',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC,CardType.COLORLESS],
      damage: '150',
      text: 'Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
