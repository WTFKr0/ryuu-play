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

export class Famignol extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Famignol';

  public fullName: string = 'Famignol sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/168/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'TODO_ELVOLVE';

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 60;

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
      name: 'Gifle Douce',
      cost: [CardType.COLORLESS,CardType.COLORLESS],
      damage: '50',
      text: '',
    },
    {
      name: 'Rongement Incessant',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '',
      text: 'Placez un marqueur de dégâts sur chacun des Pokémon de votre adversaire pour chacun de vos Famignol en jeu.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
