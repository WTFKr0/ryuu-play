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

export class Têtes_de_Fer extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Têtes-de-Fer';

  public fullName: string = 'Têtes-de-Fer sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/139/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 130;

  public weakness = [{ type: CardType.LIGHTNING }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Combat Automatisé',
      powerType: PowerType.POKEPOWER,
      text: 'Si ce Pokémon est sur le Poste Actif et qu\'il subit les dégâts d\'une attaque d\'un Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.',
    },
  ];

  public attacks = [
    {
      name: 'Vent Impitoyable',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '110',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
