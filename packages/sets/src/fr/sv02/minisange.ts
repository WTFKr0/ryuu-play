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

export class Minisange extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Minisange';

  public fullName: string = 'Minisange sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/164/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

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
      name: 'Renvoyer',
      cost: [CardType.COLORLESS],
      damage: '10',
      text: 'Envoyez le Pokémon Actif de l\'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
