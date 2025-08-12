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

export class Ferdeter extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Ferdeter';

  public fullName: string = 'Ferdeter sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/151/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 130;

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
      name: 'Fer Nutritif',
      powerType: PowerType.POKEPOWER,
      text: 'Si au moins 3 Énergies {M} sont attachées à ce Pokémon, il reçoit +100 PV.',
    },
  ];

  public attacks = [
    {
      name: 'Passer à Travers',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '100',
      text: 'Cette attaque inflige aussi 30 dégâts à l\'un des Pokémon de Banc de votre adversaire. (N\'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
