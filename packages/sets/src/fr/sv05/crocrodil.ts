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

export class Crocrodil extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Crocrodil';

  public fullName: string = 'Crocrodil sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/040/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Kaiminus';

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 90;

  public weakness = [{ type: CardType.LIGHTNING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Poussée Inverse',
      cost: [CardType.WATER],
      damage: '30',
      text: 'Échangez ce Pokémon contre l\'un de vos Pokémon de Banc.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
