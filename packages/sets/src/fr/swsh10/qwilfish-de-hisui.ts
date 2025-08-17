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

export class Qwilfish_de_Hisui extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Qwilfish de Hisui';

  public fullName: string = 'Qwilfish de Hisui swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/089/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.DARK];

  public hp: number = 80;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Assaut Épineux',
      cost: [],
      damage: '10×',
      text: 'Lancez une pièce jusqu\'à obtenir un côté pile. Cette attaque inflige 10 dégâts pour chaque côté face.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
