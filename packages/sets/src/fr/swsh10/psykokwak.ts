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

export class Psykokwak extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Psykokwak';

  public fullName: string = 'Psykokwak swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/028/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 60;

  public weakness = [{ type: CardType.LIGHTNING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Trou d\'Mémoire',
      cost: [CardType.COLORLESS],
      damage: '',
      text: 'Lancez une pièce. Si c\'est face, soignez 10 dégâts de ce Pokémon.',
    },
    {
      name: 'Collision',
      cost: [CardType.WATER,CardType.COLORLESS],
      damage: '20',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
