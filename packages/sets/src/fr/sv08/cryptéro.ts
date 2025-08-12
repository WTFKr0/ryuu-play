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

export class Cryptéro extends PokemonCard {

  public set: string = 'sv08';

  public name: string = 'Cryptéro';

  public fullName: string = 'Cryptéro sv08';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv08/081/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 110;

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
      name: 'Double Pioche',
      cost: [CardType.COLORLESS],
      damage: '',
      text: 'Piochez 2 cartes.',
    },
    {
      name: 'Choc Mental',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '60',
      text: 'Lancez une pièce. Si c\'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
