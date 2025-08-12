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

export class Scalproie extends PokemonCard {

  public set: string = 'sv03';

  public name: string = 'Scalproie';

  public fullName: string = 'Scalproie sv03';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv03/149/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 110;

  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Griffe Acier',
      cost: [CardType.METAL],
      damage: '20',
      text: '',
    },
    {
      name: 'Taillade',
      cost: [CardType.METAL,CardType.COLORLESS],
      damage: '50+',
      text: 'Lancez 3 pièces. S\'il n\'y a qu\'un côté face, cette attaque inflige 20 dégâts supplémentaires. S\'il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S\'il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
