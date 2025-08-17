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

export class Flamenroule extends PokemonCard {

  public set: string = 'sv03';

  public name: string = 'Flamenroule';

  public fullName: string = 'Flamenroule sv03';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv03/185/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 120;

  public weakness = [{ type: CardType.LIGHTNING }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Picpic',
      cost: [CardType.COLORLESS],
      damage: '20',
      text: '',
    },
    {
      name: 'Plumes Synchronisées',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '60',
      text: 'Si Flamenroule est sur votre Banc, cette attaque inflige aussi 60 dégâts à l\'un des Pokémon de Banc de votre adversaire. (N\'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
