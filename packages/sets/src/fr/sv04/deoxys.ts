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

export class Deoxys extends PokemonCard {

  public set: string = 'sv04';

  public name: string = 'Deoxys';

  public fullName: string = 'Deoxys sv04';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv04/074/high.jpg';

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
  public retreat = [CardType.COLORLESS];

  public attacks = [
    {
      name: 'Coup de Poing Psy',
      cost: [CardType.PSYCHIC],
      damage: '30',
      text: '',
    },
    {
      name: 'Spirale Génome',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC,CardType.PSYCHIC],
      damage: '120',
      text: 'Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
