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

export class Pohmotte extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Pohmotte';

  public fullName: string = 'Pohmotte sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/075/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Pohm';

  public cardTypes: CardType[] = [CardType.LIGHTNING];

  public hp: number = 80;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Choc Statique',
      cost: [CardType.LIGHTNING],
      damage: '20',
      text: '',
    },
    {
      name: 'Électrojectile',
      cost: [CardType.LIGHTNING,CardType.LIGHTNING],
      damage: '50',
      text: 'Cette attaque inflige aussi 30 dégâts à l\'un des Pokémon de Banc de votre adversaire. (N\'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
