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

export class Wimessir extends PokemonCard {

  public set: string = 'sv01';

  public name: string = 'Wimessir';

  public fullName: string = 'Wimessir sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/153/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

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
      name: 'Nourricier Expert',
      cost: [CardType.COLORLESS],
      damage: '',
      text: 'Cherchez dans votre deck une carte Évolution de l\'un de vos Pokémon, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.',
    },
    {
      name: 'Hypnoblast',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '30',
      text: 'Le Pokémon Actif de votre adversaire est maintenant Endormi.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
