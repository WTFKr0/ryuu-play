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

export class Amovénus extends PokemonCard {

  public set: string = 'swsh12.5';

  public name: string = 'Amovénus';

  public fullName: string = 'Amovénus swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/067/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 120;
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
      name: 'Vampibaiser',
      cost: [CardType.PSYCHIC],
      damage: '20',
      text: 'Soignez 20 dégâts de ce Pokémon.',
    },
    {
      name: 'Compassion Affectueuse',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '70+',
      text: 'Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 70 dégâts supplémentaires.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
