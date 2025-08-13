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

export class Croâporal extends PokemonCard {

  public set: string = 'sv06';

  public name: string = 'Croâporal';

  public fullName: string = 'Croâporal sv06';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06/057/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Grenousse';

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 90;

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
      name: 'Eau Paralysante',
      cost: [CardType.WATER],
      damage: '20',
      text: 'Lancez une pièce. Si c\'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
