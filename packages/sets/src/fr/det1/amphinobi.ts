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

export class Amphinobi extends PokemonCard {

  public set: string = 'det1';

  public name: string = 'Amphinobi';

  public fullName: string = 'Amphinobi det1';

  public imageUrl: string = 'null/high.jpg';

  public stage: Stage = Stage.STAGE_2;
  public evolvesFrom = 'Croâporal';

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 140;

  public weakness = [{ type: CardType.GRASS }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public powers = [
    {
      name: 'Jutsu Évasion',
      powerType: PowerType.POKEPOWER,
      text: 'Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts.',
    },
  ];

  public attacks = [
    {
      name: 'Shuriken Furieux',
      cost: [CardType.WATER,CardType.WATER],
      damage: '',
      text: 'Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
