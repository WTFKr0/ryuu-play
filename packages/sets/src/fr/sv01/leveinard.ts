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

export class Leveinard extends PokemonCard {

  public set: string = 'sv01';

  public name: string = 'Leveinard';

  public fullName: string = 'Leveinard sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/144/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 110;

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
      name: 'Écras\'Face',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '40',
      text: '',
    },
    {
      name: 'Œuf Roulant',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '60×',
      text: 'Lancez une pièce jusqu\'à obtenir un côté pile. Cette attaque inflige 60 dégâts pour chaque côté face.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
