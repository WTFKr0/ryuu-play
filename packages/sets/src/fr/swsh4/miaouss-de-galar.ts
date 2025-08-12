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

export class Miaouss_de_Galar extends PokemonCard {

  public set: string = 'swsh4';

  public name: string = 'Miaouss de Galar';

  public fullName: string = 'Miaouss de Galar swsh4';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh4/112/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.METAL];

  public hp: number = 70;

  public weakness = [{ type: CardType.FIRE }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Griffe',
      cost: [CardType.METAL],
      damage: '10',
      text: '',
    },
    {
      name: 'Combo-Griffe',
      cost: [CardType.METAL,CardType.COLORLESS],
      damage: '20×',
      text: 'Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
