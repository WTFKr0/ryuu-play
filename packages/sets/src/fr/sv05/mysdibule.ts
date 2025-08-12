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

export class Mysdibule extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Mysdibule';

  public fullName: string = 'Mysdibule sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/112/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 90;

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
      name: 'Inviter et Frapper',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '',
      text: 'Envoyez l\'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.',
    },
    {
      name: 'Croc Aiguisé',
      cost: [CardType.METAL,CardType.METAL,CardType.COLORLESS],
      damage: '100',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
