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

export class Skelénox extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Skelénox';

  public fullName: string = 'Skelénox sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/018/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 60;

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
      name: 'Viens me Chercher',
      cost: [CardType.PSYCHIC],
      damage: '',
      text: 'Placez jusqu\'à 3 Skelénox de votre pile de défausse sur votre Banc.',
    },
    {
      name: 'Murmure',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC],
      damage: '30',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
