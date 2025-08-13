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

export class Pohmarmotte extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Pohmarmotte';

  public fullName: string = 'Pohmarmotte sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/076/high.jpg';

  public stage: Stage = Stage.STAGE_2;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.LIGHTNING];

  public hp: number = 140;

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
      name: 'Éclair Fulgurant',
      cost: [CardType.LIGHTNING],
      damage: '40',
      text: '',
    },
    {
      name: 'Poigne Électrique',
      cost: [CardType.LIGHTNING,CardType.LIGHTNING],
      damage: '100',
      text: 'Cette attaque inflige aussi 60 dégâts à l\'un des Pokémon de Banc de votre adversaire. (N\'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
