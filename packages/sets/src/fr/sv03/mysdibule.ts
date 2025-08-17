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

export class Mysdibule extends PokemonCard {

  public set: string = 'sv03';

  public name: string = 'Mysdibule';

  public fullName: string = 'Mysdibule sv03';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv03/143/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 90;

  public weakness = [{ type: CardType.FIRE }];

  public resistance = [
    {
      type: CardType.GRASS,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public powers = [
    {
      name: 'Mangeur Spécial',
      powerType: PowerType.POKEPOWER,
      text: 'Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée au Pokémon Actif de votre adversaire.',
    },
  ];

  public attacks = [
    {
      name: 'Croc Aiguisé',
      cost: [CardType.METAL,CardType.COLORLESS,CardType.COLORLESS],
      damage: '90',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
