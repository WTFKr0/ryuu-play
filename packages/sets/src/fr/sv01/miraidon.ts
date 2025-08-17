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

export class Miraidon extends PokemonCard {

  public set: string = 'sv01';

  public name: string = 'Miraidon';

  public fullName: string = 'Miraidon sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/080/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.LIGHTNING];

  public hp: number = 120;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Croc Aiguisé',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '30',
      text: '',
    },
    {
      name: 'Laser Éclair',
      cost: [CardType.LIGHTNING,CardType.LIGHTNING,CardType.COLORLESS],
      damage: '90',
      text: 'Cette attaque inflige aussi 30 dégâts à l\'un des Pokémon de Banc de votre adversaire. (N\'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
