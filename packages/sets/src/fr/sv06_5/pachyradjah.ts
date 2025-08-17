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

export class Pachyradjah extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Pachyradjah';

  public fullName: string = 'Pachyradjah sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/042/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Charibari';

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 200;

  public weakness = [{ type: CardType.FIRE }];

  public resistance = [
    {
      type: CardType.GRASS,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Corps Massif',
      powerType: PowerType.POKEPOWER,
      text: 'Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.',
    },
  ];

  public attacks = [
    {
      name: 'Lasso Nasal',
      cost: [CardType.METAL,CardType.METAL,CardType.METAL,CardType.COLORLESS],
      damage: '130+',
      text: 'Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant votre prochain tour, ce Pokémon ne peut pas attaquer.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
