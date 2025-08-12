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

export class Flamenroule extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Flamenroule';

  public fullName: string = 'Flamenroule sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/170/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 110;

  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public powers = [
    {
      name: 'Instanta-Nuée',
      powerType: PowerType.POKEPOWER,
      text: 'Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu\'à 3 Flamenroule, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.',
    },
  ];

  public attacks = [
    {
      name: 'Ailes Unies',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '20×',
      text: 'Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse ayant l\'attaque Ailes Unies.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
