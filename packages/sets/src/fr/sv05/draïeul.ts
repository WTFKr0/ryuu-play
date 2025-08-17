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

export class Draïeul extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Draïeul';

  public fullName: string = 'Draïeul sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/138/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 120;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Gifle Douce',
      cost: [CardType.COLORLESS],
      damage: '20',
      text: '',
    },
    {
      name: 'Canon Déchaîné',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '100+',
      text: 'Si tous vos Pokémon de Banc ont au moins un marqueur de dégâts, cette attaque inflige 120 dégâts supplémentaires.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
