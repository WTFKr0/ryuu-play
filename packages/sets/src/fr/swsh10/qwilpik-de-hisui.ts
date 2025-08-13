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

export class Qwilpik_de_Hisui extends PokemonCard {

  public set: string = 'swsh10';

  public name: string = 'Qwilpik de Hisui';

  public fullName: string = 'Qwilpik de Hisui swsh10';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh10/090/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Qwilfish de Hisui';

  public cardTypes: CardType[] = [CardType.DARK];

  public hp: number = 130;

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
      name: 'Poison Tourmente',
      cost: [],
      damage: '',
      text: 'Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 5 marqueurs de dégâts sur ce Pokémon-là au lieu d\'un.',
    },
    {
      name: 'Immobilisation',
      cost: [CardType.DARK,CardType.COLORLESS],
      damage: '50',
      text: 'Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
