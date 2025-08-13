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

export class Paragruel_de_Hisui extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Paragruel de Hisui';

  public fullName: string = 'Paragruel de Hisui swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/044/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Bargantua de Hisui';

  public cardTypes: CardType[] = [CardType.WATER];

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
      name: 'Plongée Rancunière',
      cost: [CardType.WATER],
      damage: '30+',
      text: 'Si au moins l\'un de vos Pokémon a été mis K.O. par les dégâts d\'une attaque d\'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Confus.',
    },
    {
      name: 'Bélier Volant',
      cost: [CardType.WATER,CardType.COLORLESS,CardType.COLORLESS],
      damage: '80',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
