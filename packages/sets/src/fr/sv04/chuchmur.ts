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

export class Chuchmur extends PokemonCard {

  public set: string = 'sv04';

  public name: string = 'Chuchmur';

  public fullName: string = 'Chuchmur sv04';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv04/148/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 70;

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
      name: 'Recul',
      cost: [CardType.COLORLESS],
      damage: '10',
      text: 'Envoyez le Pokémon Actif de l\'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
