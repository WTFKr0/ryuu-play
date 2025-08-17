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

export class Bacabouh extends PokemonCard {

  public set: string = 'sv06';

  public name: string = 'Bacabouh';

  public fullName: string = 'Bacabouh sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/091/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 90;

  public weakness = [{ type: CardType.DARK }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Jet de Sable',
      cost: [CardType.PSYCHIC],
      damage: '10',
      text: 'Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d\'utiliser une attaque, votre adversaire lance une pièce. Si c\'est pile, l\'attaque n\'est pas lancée.',
    },
    {
      name: 'Tir Effrayant',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '30',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
