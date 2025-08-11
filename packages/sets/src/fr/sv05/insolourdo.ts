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

export class Insolourdo extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Insolourdo';

  public fullName: string = 'Insolourdo sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/128/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 60;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [];

  public attacks = [
    {
      name: 'Ronge',
      cost: [CardType.COLORLESS],
      damage: '10',
      text: '',
    },
    {
      name: 'Tunnel',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '30',
      text: 'Lancez une pièce. Si c\'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d\'attaques infligés à ce Pokémon.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
