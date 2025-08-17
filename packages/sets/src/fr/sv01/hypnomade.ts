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

export class Hypnomade extends PokemonCard {

  public set: string = 'sv01';

  public name: string = 'Hypnomade';

  public fullName: string = 'Hypnomade sv01';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv01/083/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Soporifik';

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 110;

  public weakness = [{ type: CardType.DARK }];

  public resistance = [
    {
      type: CardType.FIGHTING,
      value: -30,
    },
  ];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Influence Pendulaire',
      cost: [CardType.PSYCHIC],
      damage: '',
      text: 'Lancez une pièce. Si c\'est face, choisissez une attaque de l\'un des Pokémon en jeu de votre adversaire, et utilisez-la en tant que cette attaque.',
    },
    {
      name: 'Sphère Psy',
      cost: [CardType.PSYCHIC,CardType.COLORLESS,CardType.COLORLESS],
      damage: '100',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
