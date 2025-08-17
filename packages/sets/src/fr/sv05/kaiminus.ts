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

export class Kaiminus extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Kaiminus';

  public fullName: string = 'Kaiminus sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/039/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 70;

  public weakness = [{ type: CardType.LIGHTNING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Grosse Morsure',
      cost: [CardType.WATER],
      damage: '10',
      text: 'Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
